import { Vue } from 'vue-property-decorator'

/**
 * mixins
 */
export class CommonMixin extends Vue {
  currentPage = 1
  pageSize = 20
  total = 0
}
