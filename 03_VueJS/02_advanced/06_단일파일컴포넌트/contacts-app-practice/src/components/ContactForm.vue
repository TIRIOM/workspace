<template>
  <div class="input-form card card-body mt-3">
    <div class="row g-3">
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          placeholder="이름"
          v-model="contact.name"
        />
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model="contact.gender">
          <option value="">성별</option>
          <option value="남">남</option>
          <option value="여">여</option>
        </select>
      </div>
      <div class="col-md-2">
        <input
          type="number"
          class="form-control"
          placeholder="나이"
          v-model="contact.age"
        />
      </div>
      <div class="col-md-3">
        <input
          type="email"
          class="form-control"
          placeholder="이메일"
          v-model="contact.email"
        />
      </div>
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          placeholder="github ID"
          v-model="contact.github"
        />
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100" @click="addContact">추가</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',

  data() {
    return {
      contact: {
        name: '',
        gender: '',
        age: '',
        email: '',
        github: '',
      },
    };
  },

  methods: {
    addContact() {
      // 이름이 입력 안된 경우 '이름을 입력하세요' 알림창
      if (!this.contact.name) {
        alert('이름을 입력하세요');
        return;
      }
      if (!this.contact.email) {
        alert('이메일을 입력하세요');
        return;
      }
      // 이메일이 입력 안된 경우 '이메일을 입력하세요' 알림창
      // 둘 다 입력이 된 경우 연락처 추가
      this.$emit('add-contact', this.contact);
      // 입력이 끝나면 refresh
      this.contact = { name: '', gender: '', age: '', email: '', github: '' };
    },
  },
};
</script>
