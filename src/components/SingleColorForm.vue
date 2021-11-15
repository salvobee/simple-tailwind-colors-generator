<template>
  <div class="container">
    <div class="color-input-group">
      <input
          maxlength="6"
          class="color-input"
          v-model="userColor"
          placeholder="Paste your HEX color..."
          type="text" name="color"
          data-user-color
      />
      <button type="button"  @click="handleGenerateColorVariants" id="generate-button" class="generate-button">
        Generate Shades
      </button>
    </div>

    <template v-if="!checkColorErrors">
      <p class="error-invalid-color">Invalid color provided</p>
    </template>

    <div class="generated-shades">
      <textarea
          v-model="generatedShadesAsString"
          class="shades-object-code"
          id="generated-shades"
          data-generated-shades
      ></textarea>

      <div class="shades-preview">
        <template v-for="(shade, key) in generatedShades">
          <div class="shade-preview" :style="{ backgroundColor: shade }">
            <span class="shade-preview-label">
              {{ key }}
            </span>
          </div>
        </template>
      </div>
    </div>

    <button @click="handleCopyToClipboard" class="clipboard-copy">Copy</button>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {generateVariants} from "../lib/shadesGenerator";
import {copyTextToClipboard} from "../lib/clipboardHelpers";

const userColor = ref('')
const generatedShades = ref({})
const isColorValid = ref(true)

const checkColorErrors = computed(() => isColorValid.value)

const handleGenerateColorVariants = () => {
  console.log('ciao')
  isColorValid.value = true
  try {
    generatedShades.value = generateVariants(userColor.value)
  } catch (error) {
    isColorValid.value = false
  }
}

const handleCopyToClipboard = async () => {
  const textArea = document.getElementById('generated-shades') as HTMLTextAreaElement
  await copyTextToClipboard(textArea)
}

const generatedShadesAsString = computed(() => {
  const currentGeneratedShades = generatedShades.value
  return Object.keys(currentGeneratedShades).length === 0 ? ''
   : JSON.stringify(currentGeneratedShades, null, 4).replace(/"([^"]+)":/g, '$1:')
})
</script>

<style scoped>
.container {
  @apply flex flex-col space-y-5
}

button {
  @apply px-3 py-3 bg-primary text-white
}

.generate-button{
  @apply rounded-r-lg
}

.clipboard-copy {
  @apply rounded-lg
}

.color-input {
  @apply rounded-l-lg focus:ring-1 focus:ring-offset-0 focus:ring-primary
}

.color-input-group {
  @apply flex justify-center
}

.generated-shades {
  @apply flex
}

.shades-object-code {
  @apply
    font-mono
    border-gray-400
  resize-none overflow-hidden
    w-2/3
  h-64
  text-sm
  focus:ring-1 focus:ring-offset-0 focus:ring-primary
}

.shades-preview {
  @apply w-1/3  ml-5
}

.shade-preview {
  @apply py-1 flex justify-center
}

.shade-preview-label {
  @apply text-xs bg-black text-white px-2
}
</style>