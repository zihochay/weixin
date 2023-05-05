<template>
  <div class="preview">
    <el-dialog
      title="预览表单页面"
      :visible="visible"
      width="80%"
      :before-close="handleClose">
      <fm-generate-form
        :data="jsonData"
        ref="generateForm"
      >
      </fm-generate-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    visible: { type: Boolean, required: true, default: false },
    record: { default: () => { } }
  },
  watch: {
    visible: function (newValue, oldValue) {
      if (newValue) {
        console.log('jsonData >>', this.record)
        this.jsonData = JSON.parse(JSON.stringify(this.record))
      }
    }
  },
  data () {
    return {
      jsonData: {
        list: [],
        config: {}
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('sure')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
