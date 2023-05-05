<template>
  <div class="editInfos">
    <el-dialog
      title="编辑动态表单"
      :visible="visible"
      width="80%"
      :before-close="handleClose">
      <div class="dialog-content">
        <el-form :model="editForm" ref="editFormRef" label-width="120px" class="edit-form">
          <el-form-item label="页面名称" prop="name">
            <el-input v-model="editForm.name" placeholder="页面名称" clearable></el-input>
          </el-form-item>
          <el-form-item label="说明" prop="address">
            <el-input v-model="editForm.address" placeholder="说明" clearable></el-input>
          </el-form-item>
          <el-form-item label="表单Json内容" prop="json">
            <el-input type="textarea" autosize v-model="editForm.json" readonly placeholder="表单Json内容" clearable></el-input>
            <el-button @click="handleEditMaking()" type="primary" size="small">编辑页面</el-button>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
    <div class='modal'>
      <EditForm :visible="visibleMaking" :record="this.editForm.json"  @close="handleClosetMaking" @save="saveJson" />
    </div>
  </div>
</template>

<script>
import EditForm from './editForm.vue'
export default {
  name: 'EditInfos',
  components: { EditForm },
  props: {
    visible: { type: Boolean, required: true, default: false },
    record: { default: () => { } }
  },
  watch: {
    visible: function (newValue, oldValue) {
      if (newValue) {
        this.editForm = JSON.parse(JSON.stringify(this.record))
        this.editForm.json = JSON.stringify(this.editForm.json)
        console.log('jsonData >>', this.jsonData)
      }
    }
  },
  data () {
    return {
      visibleMaking: false,
      editForm: {}
    }
  },
  methods: {
    handleEditMaking () {
      this.visibleMaking = true
    },
    handleClosetMaking () {
      this.visibleMaking = false
    },
    handleClose () {
      this.$emit('sure')
    },
    saveJson (val) {
      console.log('val >>', val)
      this.editForm.json = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
