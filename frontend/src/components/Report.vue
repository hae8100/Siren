<template>

<v-data-table
    :headers="headers"
    :items="report"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'Report',
    props: {
      value: Object,
      editMode: Boolean,
      isNew: Boolean
    },
    data: () => ({
        headers: [
            { text: "id", value: "id" },
            { text: "status", value: "status" },
            { text: "price", value: "price" },
        ],
        report : [],
    }),
    async created() {
      var temp = await axios.get(axios.backend + '/reports')

      this.report = temp.data._embedded.reports;

    },
    methods: {
    }
  }
</script>

