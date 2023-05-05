<template>
  <div class="list">
  <div class="search">
      <el-form :inline="true" :model="formValues" size="medium" ref="queryForm">
        <el-form-item label="页面名称" prop="groupName">
          <el-input v-model="formValues.groupName" placeholder="页面名称" :maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item label="页面说明" prop="groupKey">
          <el-input v-model="formValues.groupKey" placeholder="页面说明" :maxlength="30" clearable></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 50px">
          <el-button type="primary" size="medium">
            查询
          </el-button>
          <el-button size="medium">
            重置
          </el-button>
          <el-button size="medium">
            新增
          </el-button>
        </el-form-item>
      </el-form>
  </div>
  <el-table
    :data="tableData"
    border>
    <el-table-column
      prop="name"
      label="页面名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="说明"
      width="250">
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建日期"
      width="150">
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleView(scope.row)" type="text" size="small">页面预览</el-button>
        <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="handleEdit(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class='modal'>
    <Preview :visible="showView" :record="currentJson"  @sure="handleSure" />
    <EditInfos :visible="showEidt" :record="currentItem"  @sure="handleSure" />
  </div>
  <div class="toEdit">
    <el-button type='primary' @click="handleToADD">看看编辑页面</el-button>
  </div>
  </div>
</template>

<script>
import Preview from './preview.vue'
import EditInfos from './editInfos.vue'
export default {
  name: 'List',
  components: { Preview, EditInfos },
  data () {
    return {
      showView: false,
      showEidt: false,
      currentJson: undefined,
      currentItem: undefined,
      tableData: [{
        name: '测试页面',
        address: '说明111111',
        date: '2016-05-02',
        json: {
          'widgetList': [
            {
              'type': 'grid',
              'category': 'container',
              'icon': 'grid',
              'cols': [
                {
                  'type': 'grid-col',
                  'category': 'container',
                  'icon': 'grid-col',
                  'internal': true,
                  'widgetList': [
                    {
                      'type': 'static-text',
                      'icon': 'static-text',
                      'formItemFlag': false,
                      'options': {
                        'name': 'static-text20799',
                        'columnWidth': '200px',
                        'hidden': false,
                        'textContent': '人员登记表',
                        'customClass': [],
                        'onCreated': '',
                        'onMounted': '',
                        'label': 'static-text'
                      },
                      'displayName': '静态文字',
                      'id': 'static-text20799'
                    }
                  ],
                  'options': {
                    'name': 'gridCol96077',
                    'hidden': false,
                    'span': 12,
                    'customClass': []
                  },
                  'id': 'grid-col-96077'
                }
              ],
              'options': {
                'name': 'grid64343',
                'hidden': false,
                'gutter': 12,
                'customClass': []
              },
              'displayName': '栅格',
              'id': 'grid64343'
            },
            {
              'type': 'grid',
              'category': 'container',
              'icon': 'grid',
              'cols': [
                {
                  'type': 'grid-col',
                  'category': 'container',
                  'icon': 'grid-col',
                  'internal': true,
                  'widgetList': [
                    {
                      'type': 'input',
                      'icon': 'text-field',
                      'formItemFlag': true,
                      'options': {
                        'name': 'input97458',
                        'label': '姓名',
                        'labelAlign': '',
                        'type': 'text',
                        'defaultValue': '',
                        'placeholder': '',
                        'columnWidth': '200px',
                        'size': '',
                        'labelWidth': null,
                        'labelHidden': false,
                        'readonly': false,
                        'disabled': false,
                        'hidden': false,
                        'clearable': true,
                        'showPassword': false,
                        'required': true,
                        'validation': '',
                        'validationHint': '',
                        'customClass': [],
                        'labelIconClass': null,
                        'labelIconPosition': 'rear',
                        'labelTooltip': null,
                        'minLength': null,
                        'maxLength': null,
                        'showWordLimit': false,
                        'prefixIcon': '',
                        'suffixIcon': '',
                        'appendButton': false,
                        'buttonDisabled': false,
                        'buttonIcon': 'el-icon-search',
                        'onCreated': '',
                        'onMounted': '',
                        'onChange': '',
                        'onFocus': '',
                        'onBlur': '',
                        'onValidate': ''
                      },
                      'displayName': '单行输入',
                      'id': 'input97458'
                    }
                  ],
                  'options': {
                    'name': 'gridCol66750',
                    'hidden': false,
                    'span': 12
                  },
                  'id': 'grid-col-66750'
                },
                {
                  'type': 'grid-col',
                  'category': 'container',
                  'icon': 'grid-col',
                  'internal': true,
                  'widgetList': [
                    {
                      'type': 'radio',
                      'icon': 'radio-field',
                      'formItemFlag': true,
                      'options': {
                        'name': 'radio61394',
                        'label': '性别',
                        'labelAlign': '',
                        'defaultValue': 3,
                        'columnWidth': '200px',
                        'size': '',
                        'displayStyle': 'inline',
                        'labelWidth': null,
                        'labelHidden': false,
                        'disabled': false,
                        'hidden': false,
                        'optionItems': [
                          {
                            'label': '女士',
                            'value': 1
                          },
                          {
                            'label': '先生',
                            'value': 2
                          },
                          {
                            'label': '无可奉告',
                            'value': 3
                          }
                        ],
                        'required': false,
                        'validation': '',
                        'validationHint': '',
                        'customClass': [],
                        'labelIconClass': null,
                        'labelIconPosition': 'rear',
                        'labelTooltip': null,
                        'onCreated': '',
                        'onMounted': '',
                        'onChange': '',
                        'onValidate': ''
                      },
                      'displayName': '单选项',
                      'id': 'radio61394'
                    }
                  ],
                  'options': {
                    'name': 'gridCol16505',
                    'hidden': false,
                    'span': 12
                  },
                  'id': 'grid-col-16505'
                }
              ],
              'options': {
                'name': 'grid88004',
                'hidden': false,
                'gutter': 12,
                'customClass': []
              },
              'displayName': '栅格',
              'id': 'grid88004'
            },
            {
              'type': 'grid',
              'category': 'container',
              'icon': 'grid',
              'cols': [
                {
                  'type': 'grid-col',
                  'category': 'container',
                  'icon': 'grid-col',
                  'internal': true,
                  'widgetList': [
                    {
                      'type': 'number',
                      'icon': 'number-field',
                      'formItemFlag': true,
                      'options': {
                        'name': 'number106358',
                        'label': '年龄',
                        'labelAlign': '',
                        'defaultValue': '18',
                        'placeholder': '',
                        'columnWidth': '200px',
                        'size': '',
                        'labelWidth': null,
                        'labelHidden': false,
                        'disabled': false,
                        'hidden': false,
                        'required': true,
                        'validation': '',
                        'validationHint': '',
                        'customClass': [],
                        'labelIconClass': 'el-icon-question',
                        'labelIconPosition': 'rear',
                        'labelTooltip': '年龄大于18岁的成年人方可登记',
                        'min': 0,
                        'max': 100,
                        'precision': 0,
                        'step': 1,
                        'controlsPosition': 'right',
                        'onCreated': '',
                        'onMounted': '',
                        'onChange': '',
                        'onFocus': '',
                        'onBlur': '',
                        'onValidate': ''
                      },
                      'displayName': '计数器',
                      'id': 'number106358'
                    }
                  ],
                  'options': {
                    'name': 'gridCol101163',
                    'hidden': false,
                    'span': 12
                  },
                  'id': 'grid-col-101163'
                },
                {
                  'type': 'grid-col',
                  'category': 'container',
                  'icon': 'grid-col',
                  'internal': true,
                  'widgetList': [
                    {
                      'type': 'select',
                      'icon': 'select-field',
                      'formItemFlag': true,
                      'options': {
                        'name': 'select62173',
                        'label': '教育程度',
                        'labelAlign': '',
                        'defaultValue': '',
                        'placeholder': '',
                        'columnWidth': '200px',
                        'size': '',
                        'labelWidth': null,
                        'labelHidden': false,
                        'disabled': false,
                        'hidden': false,
                        'clearable': true,
                        'filterable': false,
                        'allowCreate': false,
                        'remote': false,
                        'automaticDropdown': false,
                        'multiple': false,
                        'multipleLimit': 0,
                        'optionItems': [
                          {
                            'value': '1',
                            'label': '社会人'
                          },
                          {
                            'value': '2',
                            'label': '高中'
                          },
                          {
                            'value': '3',
                            'label': '大学'
                          },
                          {
                            'value': '4',
                            'label': '研究生'
                          },
                          {
                            'value': '5',
                            'label': '博士及以上'
                          }
                        ],
                        'required': true,
                        'validation': '',
                        'validationHint': '',
                        'customClass': [],
                        'labelIconClass': null,
                        'labelIconPosition': 'rear',
                        'labelTooltip': null,
                        'onCreated': '',
                        'onMounted': '',
                        'onRemoteQuery': '',
                        'onChange': '',
                        'onFocus': '',
                        'onBlur': '',
                        'onValidate': ''
                      },
                      'displayName': '下拉选项',
                      'id': 'select62173'
                    }
                  ],
                  'options': {
                    'name': 'gridCol46272',
                    'hidden': false,
                    'span': 12,
                    'customClass': []
                  },
                  'id': 'grid-col-46272'
                }
              ],
              'options': {
                'name': 'grid75579',
                'hidden': false,
                'gutter': 12
              },
              'id': 'grid75579'
            }
          ],
          'formConfig': {
            'labelWidth': 80,
            'labelPosition': 'left',
            'size': '',
            'labelAlign': 'label-left-align',
            'cssCode': '',
            'customClass': '',
            'functions': '',
            'layoutType': 'PC',
            'onFormCreated': '',
            'onFormMounted': '',
            'onFormDataChange': '',
            'onFormValidate': ''
          }
        }
      }, {
        name: '测试页面2',
        address: '说明22222',
        date: '2016-05-02',
        json: {'widgetList': [{'type': 'grid', 'category': 'container', 'icon': 'grid', 'cols': [{'type': 'grid-col', 'category': 'container', 'icon': 'grid-col', 'internal': true, 'widgetList': [{'type': 'static-text', 'icon': 'static-text', 'formItemFlag': false, 'options': {'name': 'static-text20799', 'columnWidth': '200px', 'hidden': false, 'textContent': '人员登记表', 'customClass': [], 'onCreated': '', 'onMounted': '', 'label': 'static-text'}, 'displayName': '静态文字', 'id': 'static-text20799'}], 'options': {'name': 'gridCol96077', 'hidden': false, 'span': 12, 'customClass': []}, 'id': 'grid-col-96077'}], 'options': {'name': 'grid64343', 'hidden': false, 'gutter': 12, 'customClass': []}, 'displayName': '栅格', 'id': 'grid64343'}, {'type': 'grid', 'category': 'container', 'icon': 'grid', 'cols': [{'type': 'grid-col', 'category': 'container', 'icon': 'grid-col', 'internal': true, 'widgetList': [{'type': 'input', 'icon': 'text-field', 'formItemFlag': true, 'options': {'name': 'input97458', 'label': '姓名', 'labelAlign': '', 'type': 'text', 'defaultValue': '', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': false, 'disabled': false, 'hidden': false, 'clearable': true, 'showPassword': false, 'required': true, 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'minLength': null, 'maxLength': null, 'showWordLimit': false, 'prefixIcon': '', 'suffixIcon': '', 'appendButton': false, 'buttonDisabled': false, 'buttonIcon': 'el-icon-search', 'onCreated': '', 'onMounted': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'displayName': '单行输入', 'id': 'input97458'}], 'options': {'name': 'gridCol66750', 'hidden': false, 'span': 12}, 'id': 'grid-col-66750'}, {'type': 'grid-col', 'category': 'container', 'icon': 'grid-col', 'internal': true, 'widgetList': [{'type': 'radio', 'icon': 'radio-field', 'formItemFlag': true, 'options': {'name': 'radio61394', 'label': '性别', 'labelAlign': '', 'defaultValue': 3, 'columnWidth': '200px', 'size': '', 'displayStyle': 'inline', 'labelWidth': null, 'labelHidden': false, 'disabled': false, 'hidden': false, 'optionItems': [{'label': '女士', 'value': 1}, {'label': '先生', 'value': 2}, {'label': '无可奉告', 'value': 3}], 'required': false, 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'onCreated': '', 'onMounted': '', 'onChange': '', 'onValidate': ''}, 'displayName': '单选项', 'id': 'radio61394'}], 'options': {'name': 'gridCol16505', 'hidden': false, 'span': 12}, 'id': 'grid-col-16505'}], 'options': {'name': 'grid88004', 'hidden': false, 'gutter': 12, 'customClass': []}, 'displayName': '栅格', 'id': 'grid88004'}, {'type': 'grid', 'category': 'container', 'icon': 'grid', 'cols': [{'type': 'grid-col', 'category': 'container', 'icon': 'grid-col', 'internal': true, 'widgetList': [{'type': 'number', 'icon': 'number-field', 'formItemFlag': true, 'options': {'name': 'number106358', 'label': '年龄', 'labelAlign': '', 'defaultValue': '18', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'disabled': false, 'hidden': false, 'required': true, 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': 'el-icon-question', 'labelIconPosition': 'rear', 'labelTooltip': '年龄大于18岁的成年人方可登记', 'min': 0, 'max': 100, 'precision': 0, 'step': 1, 'controlsPosition': 'right', 'onCreated': '', 'onMounted': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'displayName': '计数器', 'id': 'number106358'}], 'options': {'name': 'gridCol101163', 'hidden': false, 'span': 12}, 'id': 'grid-col-101163'}, {'type': 'grid-col', 'category': 'container', 'icon': 'grid-col', 'internal': true, 'widgetList': [{'type': 'select', 'icon': 'select-field', 'formItemFlag': true, 'options': {'name': 'select62173', 'label': '教育程度', 'labelAlign': '', 'defaultValue': '', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'disabled': false, 'hidden': false, 'clearable': true, 'filterable': false, 'allowCreate': false, 'remote': false, 'automaticDropdown': false, 'multiple': false, 'multipleLimit': 0, 'optionItems': [{'value': '1', 'label': '社会人'}, {'value': '2', 'label': '高中'}, {'value': '3', 'label': '大学'}, {'value': '4', 'label': '研究生'}, {'value': '5', 'label': '博士及以上'}], 'required': true, 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'onCreated': '', 'onMounted': '', 'onRemoteQuery': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'displayName': '下拉选项', 'id': 'select62173'}], 'options': {'name': 'gridCol46272', 'hidden': false, 'span': 12, 'customClass': []}, 'id': 'grid-col-46272'}], 'options': {'name': 'grid75579', 'hidden': false, 'gutter': 12}, 'id': 'grid75579'}, {'type': 'input', 'icon': 'text-field', 'formItemFlag': true, 'options': {'name': 'input41816', 'label': '输入框', 'labelAlign': '', 'type': 'text', 'defaultValue': '', 'placeholder': '', 'columnWidth': '200px', 'size': '', 'labelWidth': null, 'labelHidden': false, 'readonly': false, 'disabled': false, 'hidden': false, 'clearable': false, 'showPassword': false, 'required': false, 'validation': '', 'validationHint': '', 'customClass': [], 'labelIconClass': null, 'labelIconPosition': 'rear', 'labelTooltip': null, 'minLength': null, 'maxLength': null, 'showWordLimit': false, 'prefixIcon': '', 'suffixIcon': '', 'appendButton': false, 'appendButtonDisabled': false, 'buttonIcon': 'el-icon-search', 'onCreated': '', 'onMounted': '', 'onInput': '', 'onChange': '', 'onFocus': '', 'onBlur': '', 'onValidate': ''}, 'id': 'input41816'}], 'formConfig': {'modelName': 'formData', 'refName': 'vForm', 'rulesName': 'rules', 'labelWidth': 80, 'labelPosition': 'left', 'size': '', 'labelAlign': 'label-left-align', 'cssCode': '', 'customClass': '', 'functions': '', 'layoutType': 'PC', 'onFormCreated': '', 'onFormMounted': '', 'onFormDataChange': '', 'onFormValidate': ''}}
      }],
      formValues: {}
    }
  },
  methods: {
    handleView (row) {
      console.log('预览 >>', row)
      this.showView = true
      this.currentJson = row.json
    },
    handleSure () {
      this.showView = false
      this.showEidt = false
      this.currentItem = undefined
      this.currentJson = undefined
    },
    handleEdit (row) {
      this.showEidt = true
      this.currentItem = row
    },
    handleToADD () {
      this.$router.push({
        path: '/add'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
