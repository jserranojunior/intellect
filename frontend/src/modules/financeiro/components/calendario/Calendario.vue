<template>
  <div>
    <div class="painel">
      <div class="painel-body">
        <div class="flex">
          <div class="w-full">
            <VueTailwindPicker
              :theme="{
                background: '#1A202C',
                text: 'text-white',
                border: 'border-gray-700',
                currentColor: 'text-gray-200',
                navigation: {
                  background: 'bg-gray-800',
                  hover: 'hover:bg-gray-700',
                  focus: 'bg-gray-700',
                },
                picker: {
                  rounded: 'rounded-md',
                  selected: {
                    background: 'bg-teal-400',
                    border: 'border-teal-400',
                    hover: 'hover:border-teal-400',
                  },
                  holiday: 'text-red-400',
                  weekend: 'text-green-400',
                  event: 'bg-blue-500',
                },
                event: {
                  border: 'border-gray-700',
                },
              }"
              :start-date="'2020-01-01'"
              :selected-date="dataSelecionada"
              @change="(v) => (dataSelecionada = v)"
            >
              <input
                class="cursor-pointer w-full bg-gray-600 appearance-none border-2 border-gray-600 rounded py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-500 focus:border-purple-500"
                type="date"
                v-model="dataSelecionada"
              />
            </VueTailwindPicker>
          </div>
        </div>
        <!-- <div class="flex mt-1 justify-between">
          <div class="w-1/2">
            <button
              class="cursor-pointer text-center border border-teal-500 bg-teal-500 text-white rounded-sm font-bold py-1 px-6 ml-2"
              @click="changeMonth('previous')"
            >
              Anterior
            </button>
          </div>
          <div class="w-1/2">
            <button
              class="cursor-pointer text-center border border-teal-500 bg-teal-500 text-white rounded-sm font-bold py-1 px-6"
              @click="changeMonth('next')"
            >
              Próximo
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */

  import VueTailwindPicker from "./VueTailwindPicker";
  import dayjs from "dayjs";
  import { mapActions } from "vuex";
  var updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.extend(updateLocale);

  dayjs.updateLocale("en", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domindo",
    ],
    weekdaysShort: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  });

  function dateJstoUs(value) {
    var d = new Date(value),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  export default {
    name: "Calendario",
    methods: {
      ...mapActions(["ActionSetDataSelecionada"]),
      changeMonth(type) {
        let alterMonth;
        let alterDays;
        let atual = new Date(...this.dataSelecionada.split());

        if (type == "previous") {
          alterMonth = atual.getMonth() - 1;
          alterDays = atual.getDate() + 1;
        } else if (type == "next") {
          alterMonth = atual.getMonth() + 1;
          alterDays = atual.getDate() + 1;
        }
        atual = new Date(atual.setMonth(alterMonth));
        atual = new Date(atual.setDate(alterDays));
        this.dataSelecionada = atual.toLocaleDateString("fr-CA");
      },
    },
    components: {
      VueTailwindPicker,
    },
    data() {
      return {
        dataSelecionada: "",
      };
    },
    beforeMount() {
      this.dataSelecionada = new Date().toLocaleDateString("fr-CA");
      //    this.dataSelecionada = this.calendarData.currentDate
    },
    watch: {
      dataSelecionada() {
        this.ActionSetDataSelecionada(this.dataSelecionada);
      },
      // calendarData: {
      //   handler: function () {
      //     let mes = this.calendarData.currentDate.getMonth();
      //     let mesEscrito = this.calendarConfigs.monthNames[mes];
      //     let ano = this.calendarData.currentDate.getFullYear();
      //     this.dataSelecionada = mesEscrito + " - " + ano;
      //     let mesFormatado = mes;
      //     if (mes < 10) {
      //       mesFormatado = "0" + (mes + 1);
      //     } else {
      //       mesFormatado = mes + 1;
      //     }
      //     let dataAnoMes = ano + "-" + mesFormatado;
      //     this.ActionSetDataSelecionada(dataAnoMes);
      //     this.ActionGetCategoriasContasAPagar(dataAnoMes);
      //   },
      //   deep: true,
      // },
    },
  };
</script>

<style>
  .none {
    display: none;
  }
</style>
