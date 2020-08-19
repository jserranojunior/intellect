<template>
<div>
    <div class="none">
        <FunctionalCalendar v-model="calendarData" ref="Calendar" :newCurrentDate="newCurrentDate" :is-modal='true' :configs="calendarConfigs"></FunctionalCalendar>
    </div>

    <div class="row">
        <div class="col text-center">
            <div class="btn btn-sm btn-primary  pointer" @click="preMonth()"><i class="fas fa-chevron-left"></i></div>
            <div class="btn text-bold"> <span>{{dataSelecionada}}</span> </div>
            <div class="btn btn-sm btn-primary  pointer" @click="nexMonth()"> <i class="fas fa-chevron-right"></i></div>
        </div>
    </div>
</div>
</template>

<script>
import {
    FunctionalCalendar
} from 'vue-functional-calendar';

import {mapActions} from 'vuex'
export default {
    name: "Calendario",
    methods: {
        ...mapActions([
            'ActionSetDataSelecionada',
            'ActionGetCategoriasContasAPagar'
        ]),
        preMonth() {
            this.$refs.Calendar.PreMonth()
        },
        nexMonth() {
            this.$refs.Calendar.NextMonth()
        }
    },
    components: {
        FunctionalCalendar,
    },
    data() {
        return {
            dataSelecionada: "",

            newCurrentDate: new Date(),
            calendarData: {},
            calendarConfigs: {
                // sundayStart: false,
                dateFormat: 'dd/mm/yyyy',
                isDatePicker: true,
                isModal: true,

                // isDateRange: false,                

                monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                shortMonthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                dayNames: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            },

            // DatasCanceladas: [],
        }
    },
    beforeMount() {

        //    this.dataSelecionada = this.calendarData.currentDate
    },
    watch: {
        calendarData: {
            handler: function () {
                // console.log(this.calendarData.currentDate)
                let mes = this.calendarData.currentDate.getMonth()
                let mesEscrito = this.calendarConfigs.monthNames[mes]
                let ano = this.calendarData.currentDate.getFullYear()
                this.dataSelecionada = mesEscrito + " - " + ano
                // this.dataSelectionada = this.calendarData.selectedDate
               
                let mesFormatado = mes

                 if (mes < 10) {
                    mesFormatado = '0'+ (mes + 1 );
                } else {
                    mesFormatado = (mes + 1 );
                }

                 let dataAnoMes = ano + '-' + mesFormatado

                this.ActionSetDataSelecionada(dataAnoMes)
                this.ActionGetCategoriasContasAPagar(dataAnoMes)
            },
            deep: true
        },
    }
}
</script>

<style>
.none {
    display: none
}
</style>
