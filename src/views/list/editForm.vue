<template>
  <div class="preview">
    <el-dialog
      title="编辑表单页面"
      :visible="visible"
      fullscreen
      :before-close="handleClose">
      <fm-making-form
          ref="makingform"
          style="height: calc(100vh - 84px);"
          preview
          generate-code
          generate-json
          upload
          clearable
        >
          <template slot="action">
            <el-button type="primary" icon="el-icon-upload" size="mini" @click="saveCode()">保存代码</el-button>
          </template>
        </fm-making-form>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">关 闭</el-button>
      </span> -->
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
        this.jsonData = JSON.parse(JSON.stringify(this.record))
        this.show(this.record)
        console.log('jsonData >>', this.jsonData)
      }
    }
  },
  data () {
    return {
      jsonData: {}
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    saveCode () { // 保存代码
      const json = this.$refs.makingform.getJSON()// getHtml()
      //   console.log(json)
      this.$emit('save', JSON.stringify(json)) // 触发事件，返回内容
      this.isShowForm = false
    },
    show (json) { // 显示窗口并加载数据
      this.isShowForm = true
      if (json) { // 表单结构
        this.jsonData = JSON.parse(json)
        // console.log(this.jsonData)
        this.$nextTick(() => {
          this.$refs.makingform.setJSON(this.jsonData)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
