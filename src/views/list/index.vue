<template>
  <div class="list">
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
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleView(scope.row)" type="text" size="small">页面预览</el-button>
        <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class='modal'>
    <Preview :visible="showView" :record="currentJson"  @sure="handleSure" />
    <EditInfos :visible="showEidt" :record="currentItem"  @sure="handleSure" />
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
        json: { 'list': [ { 'type': 'input', 'icon': 'icon-input', 'options': { 'width': '100%', 'defaultValue': '', 'required': false, 'dataType': 'string', 'pattern': '', 'placeholder': '', 'disabled': false, 'remoteFunc': 'func_1641373075000_56459' }, 'name': '单行文本', 'key': '1641373075000_56459', 'model': 'input_1641373075000_56459', 'rules': [ { 'type': 'string', 'message': '单行文本格式不正确' } ] }, { 'type': 'number', 'icon': 'icon-number', 'options': { 'width': '', 'required': false, 'defaultValue': 0, 'min': 0, 'max': 0, 'step': 1, 'disabled': false, 'controlsPosition': '', 'remoteFunc': 'func_1641373077000_4231' }, 'name': '计数器', 'key': '1641373077000_4231', 'model': 'number_1641373077000_4231', 'rules': [] }, { 'type': 'textarea', 'icon': 'icon-diy-com-textarea', 'options': { 'width': '100%', 'defaultValue': '', 'required': false, 'disabled': false, 'pattern': '', 'placeholder': '', 'remoteFunc': 'func_1641373079000_64039' }, 'name': '多行文本', 'key': '1641373079000_64039', 'model': 'textarea_1641373079000_64039', 'rules': [] } ], 'config': { 'labelWidth': 100, 'labelPosition': 'right', 'size': 'small' } }
      }, {
        name: '测试页面2',
        address: '说明22222',
        date: '2016-05-02',
        json: { 'list': [ { 'type': 'input', 'icon': 'icon-input', 'options': { 'width': '100%', 'defaultValue': '', 'required': false, 'dataType': 'string', 'pattern': '', 'placeholder': '', 'disabled': false, 'remoteFunc': 'func_1641373075000_56459' }, 'name': '单行文本', 'key': '1641373075000_56459', 'model': 'input_1641373075000_56459', 'rules': [ { 'type': 'string', 'message': '单行文本格式不正确' } ] }, { 'type': 'textarea', 'icon': 'icon-diy-com-textarea', 'options': { 'width': '100%', 'defaultValue': '', 'required': false, 'disabled': false, 'pattern': '', 'placeholder': '', 'remoteFunc': 'func_1641373079000_64039' }, 'name': '多行文本', 'key': '1641373079000_64039', 'model': 'textarea_1641373079000_64039', 'rules': [] } ], 'config': { 'labelWidth': 100, 'labelPosition': 'right', 'size': 'small' } }
      }]
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
