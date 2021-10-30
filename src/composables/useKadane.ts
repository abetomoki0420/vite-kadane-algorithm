import { ref } from "vue"

const useKadane = () => {
  const sum = ref(0)
  const maxSum = ref(0)

  const startIndex = ref(0)
  const endIndex = ref(0)

  const run = (nums: number[], index: number) => {
    sum.value = 0
    maxSum.value = 0

    for (let i = 0; i < index; i++) {
      sum.value = Math.max(nums[i], sum.value + nums[i])

      // maxSum.value = Math.max(maxSum.value, sum.value)
      if (sum.value > maxSum.value) {
        endIndex.value = i
        let temp = nums[i]
        let j = i

        while (temp < sum.value) {
          j--
          temp += nums[j]
        }
        startIndex.value = j

        maxSum.value = sum.value
      }
    }
  }

  return {
    sum,
    maxSum,
    startIndex,
    endIndex,
    run,
  }
}

export default useKadane
