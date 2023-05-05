
<template>
  <v-form-designer ref="vfDesigner" :form-json="formJson" :designer-config="designerConfig">
    <template slot="action">
      <el-button type="primary" icon="el-icon-upload" size="mini" @click="saveCode()">保存代码</el-button>
    </template>
  </v-form-designer>
</template>

<script>
export default {
  data () {
    return {
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
  mounted () {
    const jsonFrom = {'widgetList': [{'type': 'input', 'icon': 'text-field', 'formItemFlag': true, 'options': {'name': 'id', 'label': 'ID', 'labelAlign': 'label-right-align', 'type': 'text', 'defaultValue': '', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': false, 'disabled': false, 'hidden': true, 'clearable': true, 'showPassword': false, 'required': false, 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'minLength': null, 'maxLength': null, 'showWordLimit': false, 'prefixIcon': '', 'suffixIcon': '', 'appendButton': false, 'appendButtonDisabled': false, 'buttonIcon': 'el-icon-search', 'onCreated': '', 'onMounted': '', 'onInput': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'id': 'input54967'}], 'formConfig': {'modelName': 'formData', 'refName': 'vForm', 'rulesName': 'rules', 'labelWidth': 80, 'labelPosition': 'left', 'size': '', 'labelAlign': 'label-left-align', 'cssCode': '', 'customClass': '', 'functions': '', 'layoutType': 'PC', 'onFormCreated': '', 'onFormMounted': '', 'onFormDataChange': ''}}
    this.$refs.vfDesigner.setFormJson(jsonFrom)
  },
  methods: {
    saveCode () { // 保存代码
      const json = this.$refs.vfDesigner.getFormJson()// getHtml()
      console.log('json >>', json)
      // this.$emit('save', JSON.stringify(json)) // 触发事件，返回内容
      // this.isShowForm = false
    }
  }
}
</script>

<style scoped>
body {
margin: 0;  /* 如果页面出现垂直滚动条，则加入此行CSS以消除之 */
}
</style>
