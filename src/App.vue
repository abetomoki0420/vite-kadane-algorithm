<script setup lang="ts">
import { ref } from "vue"
import useKadane from "./composables/useKadane"

const size = ref(1)

const nums = [
  13,
  0 - 3,
  -25,
  20,
  -3,
  -16,
  -23,
  18,
  20,
  -7,
  12,
  -5,
  -22,
  15,
  -4,
  7,
]

const { sum, maxSum, startIndex, endIndex, run } = useKadane()

const execute = () => {
  run(nums, size.value)
}

const innerCalc = (index: number) => {
  if (index >= startIndex.value && index <= endIndex.value) {
    return "bg-embar-500"
  }

  return index < size.value ? "bg-red-200" : "bg-blue-300"
}

execute()
</script>

<template>
  <h1 class="container mx-auto p-2">
    <div class="text-3xl">Kadane’s Algorithm</div>
    <div class="flex gap-2 items-center mt-4">
      <label>current index</label>
      <input
        class="border border-gray-400 p-2 rounded-md select-none text-xl"
        type="number"
        min="1"
        :max="nums.length"
        v-model="size"
        @change="execute"
      />
    </div>
    <div><span class="text-xl">Max</span> {{ maxSum }}</div>
    <div><span class="text-xl">Current</span> {{ sum }}</div>
    <div>
      <span class="text-xl">Interval</span>
      <span>[{{ startIndex }}] to [{{ endIndex }}]</span>
    </div>

    <div class="flex gap-2">
      <div
        v-for="(num, index) in nums"
        :key="index"
        class="h-10 w-10 p-2 border rounded-md transition duration-300"
        :class="innerCalc(index)"
      >
        <div>{{ num }}</div>
        <div class="mt-2">[{{ index }}]</div>
      </div>
    </div>
  </h1>
</template>
