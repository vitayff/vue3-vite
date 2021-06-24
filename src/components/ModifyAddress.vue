<template>
  <div class="modify-address">
    <header>
      <span class="toProfile" @click="toProfile">
        <n-icon size="40" color="#0e7a0d">
          <back-icon />
        </n-icon>
      </span>
      <h3>修改收货地址</h3>
    </header>
    <main>
      <n-form :model="newAddForm" ref="newAddForm" :rules="rules">
        <n-form-item path="name" label="收货人">
          <n-input v-model:value="newAddForm.name" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="phone" label="电话">
          <n-input v-model:value="newAddForm.phone" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="city" label="所在城市">
          <n-input v-model:value="newAddForm.city" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="detailAdd" label="收货地址">
          <n-input v-model:value="newAddForm.detailAdd" @keydown.enter.prevent />
        </n-form-item>
        <div style="display: flex; justify-content: center;">
          <n-button @click="submitForm('newAddForm')" round type="info">保存修改</n-button>
          <n-button @click="deleteAddress" round type="error">删除收货地址</n-button>
        </div>
      </n-form>
    </main>
  </div>
</template>

<script>
import { ChevronBack as BackIcon } from '@vicons/ionicons5'

export default {
  data() {
    let validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'));
      } else if (!/^1[3-9]{1}[0-9]{9}$/.test(value)) {
        return callback(new Error('手机号不正确'));
      } else {
        callback();
      }
    };
    return {
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: validatePhone, trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请输入所在城市', trigger: 'blur' }
        ],
        detailAdd: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
      }
    }
  },
  components: {
    BackIcon
  },
  computed: {
    itemIndex() {
      return this.$route.query.index;
    },
    newAddForm() {
      return this.$store.state.address[this.itemIndex];
    }
  },
  methods: {
    toProfile() {
      this.$router.push({
        path: '/Profile/EditAddressPage'
      })
      //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
      this.$store.state.cartCounter++;
      this.$store.state.cartCounter--;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(77777)
          this.$store.commit('modifyAddress', {
            index: this.itemIndex,
            value: this.newAddForm
          });
          this.$router.push({
            path: '/Profile/EditAddressPage'
          })
        } else {
          return false;
        }
      });
    },
    deleteAddress() {
      this.$store.commit('deleteAddress', this.itemIndex);
      this.$router.push({
        path: '/Profile/EditAddressPage'
      })
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.modify-address {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  background-color: #f5f5f5;
  header {
    position: relative;
    height: 50px;
    line-height: 50px;
    background-color: #fff;

    .toProfile i {
      position: absolute;
      left: 10px;
      font-size: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  main {
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;
  }
  footer {
    margin-top: 50px;
  }
}
</style>
