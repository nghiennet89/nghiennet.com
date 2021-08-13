export default {
  namespaced: true,
  state: {
    business: [
      {
        icon: 'mdi-map-marker-outline',
        title: 'Address',
        text: 'FPT Tower - 17 Duy Tan - Ha Noi<br>Ngoc Thuy - Long Bien - Ha Noi',
      },
      {
        icon: 'mdi-cellphone',
        title: 'Phone',
        text: '+84366535988',
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        text: 'nghiennet89@gmail.com',
      },
    ],
  },
  getters: {
    business: state => state.business
  },
  mutations: {},
  actions: {},
}
