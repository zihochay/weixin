<template>
  <div class="preview">
    <el-dialog
      title="编辑表单页面"
      :visible="visible"
      fullscreen
      :before-close="handleClose">
      <v-form-designer ref="vfDesigner" :form-json="formJson" :designer-config="designerConfig">
        <template slot="action">
          <el-button type="primary" icon="el-icon-upload" size="mini" @click="saveCode()">保存代码</el-button>
        </template>
      </v-form-designer>
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
      jsonData: {},
      designerConfig: {
        externalLink: false,
        // 是否显示导出代码按钮
        exportCodeButton: false,
        // 是否显示生成SFC按钮
        generateSFCButton: false,
        languageMenu: false
      },
      formJson: {'widgetList': [], 'formConfig': {'modelName': 'formData', 'refName': 'vForm', 'rulesName': 'rules', 'labelWidth': 80, 'labelPosition': 'left', 'size': '', 'labelAlign': 'label-left-align', 'cssCode': '', 'customClass': '', 'functions': '', 'layoutType': 'PC', 'onFormCreated': '', 'onFormMounted': '', 'onFormDataChange': '', 'onFormValidate': ''}}
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    saveCode () { // 保存代码
      const json = this.$refs.vfDesigner.getFormJson()// getHtml()
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
          this.$refs.vfDesigner.setFormJson(this.jsonData)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
