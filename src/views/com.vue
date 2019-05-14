<template>
    <div>
        <div class="box">
            <el-checkbox :indeterminate="isIndeterminate"
                         v-model="checkAll"
                         @change="(val)=>{handleCheckAllChange(val, 'checkedCities', 'isIndeterminate', 'cities')}">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities"
                               @change="(val) => {handleCheckedCitiesChange(val, 'checkAll', 'isIndeterminate', 'cities')}">
                <el-checkbox v-for="city in cities"
                             :label="city"
                             :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="box">
            <el-checkbox :indeterminate="isIndeterminate1"
                         v-model="checkAll1"
                         @change="(val)=>{handleCheckAllChange(val, 'checkedCities1', 'isIndeterminate1', 'cities1')}">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities1"
                               @change="(val) => {handleCheckedCitiesChange(val, 'checkAll1', 'isIndeterminate1', 'cities1')}">
                <el-checkbox v-for="city in cities1"
                             :label="city"
                             :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
      isIndeterminate: true,
      checkAll1: false,
      checkedCities1: ['1', '4'],
      cities1: ['1', '2', '3', '4'],
      isIndeterminate1: true
    }
  },
  methods: {
    handleCheckAllChange (val, modify, status, all) {
      this[modify] = val ? this[all] : []
      this[status] = false
    },
    handleCheckedCitiesChange (value, modify, status, all) {
      let checkedCount = value.length
      this[modify] = checkedCount === this[all].length
      this[status] = checkedCount > 0 && checkedCount < this[all].length
    }
  }
}
</script>
<style lang='scss' scoped>
    .box {
        margin-bottom: 20px;
    }
</style>
