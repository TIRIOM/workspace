<template>
  <div id="app" class="container-lg">
    <div class="card card-body bg-light">
      <div class="title">우리반 Contact ❤️</div>
    </div>

    <!-- 연락처 입력 폼 -->
    <ContactForm v-on:add-contact="addContact" />
    <!-- 연락처 목록 -->
    <ContactList
      v-bind:contacts="contacts"
      v-on:delete-contact="deleteContact"
    />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';
export default {
  name: 'App',
  components: {
    ContactForm,
    ContactList,
  },
  data() {
    return {
      newContact: {
        id: new Date().getTime(),
        name: '',
        gender: '',
        age: '',
        email: '',
        github: '',
      },
      contacts: [
        {
          id: 1,
          name: '홍길동',
          gender: '남',
          age: 20,
          email: 'hong@example.com',
          github: 'hongGD',
          isEditing: false,
        },
        {
          id: 2,
          name: '짱구',
          gender: '남',
          age: 7,
          email: 'janggu@example.com',
          github: 'janggu',
          isEditing: false,
        },
        {
          id: 3,
          name: '유리',
          gender: '여',
          age: 7,
          email: 'yuri@example.com',
          github: 'yuri',
          isEditing: false,
        },
      ],
    };
  },
  methods: {
    /* contact 추가 */
    addContact(newContact) {
      this.contacts.push(newContact);
    },
    /* contact 삭제 */
    deleteContact(id) {
      let index = this.contacts.findIndex((contact) => contact.id === id);
      this.contacts.splice(index, 1);
    },
  },
};
</script>
