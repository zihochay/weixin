<template>
  <div class="add">
      <v-form-render :form-json="jsonData" ref="vFormRef" :form-data="formData" :option-data="optionData" @formChange="dataChange">
      </v-form-render>
      <div>
        <el-button type='primary' @click="handleSave">保存</el-button>
        <el-button>提交</el-button>
        <el-button>返回</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Add',
  mounted () {
    this.getData()
  },
  data () {
    return {
      jsonData: {'widgetList': [], 'formConfig': {'modelName': 'formData', 'refName': 'vForm', 'rulesName': 'rules', 'labelWidth': 80, 'labelPosition': 'left', 'size': '', 'labelAlign': 'label-left-align', 'cssCode': '', 'customClass': '', 'functions': '', 'layoutType': 'PC', 'onFormCreated': '', 'onFormMounted': '', 'onFormDataChange': '', 'onFormValidate': ''}},
      formData: {},
      optionData: {}
    }
  },
  methods: {
    getData () {
      let json = {'widgetList': [{'type': 'input', 'icon': 'text-field', 'formItemFlag': true, 'options': {'name': 'input21919', 'label': 'input', 'labelAlign': '', 'type': 'text', 'defaultValue': '', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': false, 'disabled': false, 'hidden': false, 'clearable': true, 'showPassword': false, 'required': false, 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'minLength': null, 'maxLength': null, 'showWordLimit': false, 'prefixIcon': '', 'suffixIcon': '', 'appendButton': false, 'appendButtonDisabled': false, 'buttonIcon': 'el-icon-search', 'onCreated': '', 'onMounted': '', 'onInput': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'id': 'input21919'}, {'type': 'textarea', 'icon': 'textarea-field', 'formItemFlag': true, 'options': {'name': 'textarea33454', 'label': 'textarea', 'labelAlign': '', 'rows': 3, 'defaultValue': '', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': false, 'disabled': false, 'hidden': false, 'required': false, 'validation': '', 'validationHint': '', 'customClass': '', 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'minLength': null, 'maxLength': null, 'showWordLimit': false, 'onCreated': '', 'onMounted': '', 'onInput': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'id': 'textarea33454'}, {'type': 'radio', 'icon': 'radio-field', 'formItemFlag': true, 'options': {'name': 'radio103291', 'label': 'radio', 'labelAlign': '', 'defaultValue': null, 'columnWidth': '200px', 'size': '', 'displayStyle': 'inline', 'buttonStyle': false, 'border': false, 'labelWidth': null, 'labelHidden': false, 'disabled': false, 'hidden': false, 'optionItems': [{'label': 'radio 1', 'value': 1}, {'label': 'radio 2', 'value': 2}, {'label': 'radio 3', 'value': 3}], 'required': false, 'validation': '', 'validationHint': '', 'customClass': '', 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'onCreated': '', 'onMounted': '', 'onChange': '', 'onValidate': ''}, 'id': 'radio103291'}, {'type': 'checkbox', 'icon': 'checkbox-field', 'formItemFlag': true, 'options': {'name': 'checkbox38408', 'label': 'checkbox', 'labelAlign': '', 'defaultValue': [], 'columnWidth': '200px', 'size': '', 'displayStyle': 'inline', 'buttonStyle': false, 'border': false, 'labelWidth': null, 'labelHidden': false, 'disabled': false, 'hidden': false, 'optionItems': [{'label': 'check 1', 'value': 1}, {'label': 'check 2', 'value': 2}, {'label': 'check 3', 'value': 3}], 'required': false, 'validation': '', 'validationHint': '', 'customClass': '', 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'onCreated': '', 'onMounted': '', 'onChange': '', 'onValidate': ''}, 'id': 'checkbox38408'}, {'type': 'time', 'icon': 'time-field', 'formItemFlag': true, 'options': {'name': 'time81398', 'label': 'time', 'labelAlign': '', 'defaultValue': null, 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': false, 'disabled': false, 'hidden': false, 'clearable': true, 'editable': false, 'format': 'HH:mm:ss', 'required': false, 'validation': '', 'validationHint': '', 'customClass': '', 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'onCreated': '', 'onMounted': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'id': 'time81398'}, {'type': 'time-range', 'icon': 'time-range-field', 'formItemFlag': true, 'options': {'name': 'timerange57495', 'label': 'time-range', 'labelAlign': '', 'defaultValue': null, 'startPlaceholder': '', 'endPlaceholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': false, 'disabled': false, 'hidden': false, 'clearable': true, 'editable': false, 'format': 'HH:mm:ss', 'required': false, 'validation': '', 'validationHint': '', 'customClass': '', 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'onCreated': '', 'onMounted': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'id': 'timerange57495'}], 'formConfig': {'modelName': 'formData', 'refName': 'vForm', 'rulesName': 'rules', 'labelWidth': 80, 'labelPosition': 'left', 'size': '', 'labelAlign': 'label-left-align', 'cssCode': '', 'customClass': '', 'functions': '', 'layoutType': 'PC', 'onFormCreated': '', 'onFormMounted': '', 'onFormDataChange': ''}}
      this.$refs.vFormRef.setFormJson(json)
      this.$nextTick(() => {
        let newFormData = {'ID': 2, 'input21919': '测试单行输入框', 'textarea33454': '测试多行输入框', 'radio103291': 1, 'checkbox38408': [1, 2], 'time81398': '16:49:59', 'timerange57495': ['16:50:04', '17:50:04'], 'IS_DELETE': 'NO'}
        this.$refs.vFormRef.setFormData(newFormData)
        // this.$refs.vFormRef.disableWidgets(['input21919'])
      })
    },
    handleSave () {
      this.$refs.vFormRef.getFormData().then(formData => {
        // Form Validation OK
        console.log('this1 >>', this)
        alert(JSON.stringify(formData))
      }).catch(error => {
        // Form Validation failed
        this.$message.error(error)
      })
    },
    dataChange () {
      this.$refs.vFormRef.getFormData().then(formData => {
        // Form Validation OK
        this.$message.success(`在编辑状态下数据发生改变，自动保存`)
      }).catch(error => {
        // Form Validation failed
        this.$message.error(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
