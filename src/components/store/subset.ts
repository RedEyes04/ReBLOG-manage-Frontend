import { defineStore } from 'pinia'
import type { SubsetData } from '../../utils/interface'

export const useSubsetStore = defineStore('subsets', {

  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      count: 0,
      data:[] as SubsetData[]
    }
  },
})
