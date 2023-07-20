<template>
    <div>
        <div class="page-wrapper">
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Invoice</h6>
                            </div>
                            <div class="pull-right">
                                <h6 class="txt-dark"></h6>
                                <div class="button-list pull-right">
                                    <button type="button" class="btn btn-primary btn-outline btn-icon left-icon" onclick="javascript:window.Printkan()">
                                        <i class="fa fa-print"></i><span> Print</span>
                                    </button>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <!-- <vue-credit-card :preview-enabled="true" :card-types="cardTypes">
                                </vue-credit-card> -->
                                <vue-paycard :value-fields="{
                                    cardName: 'Morris',
                                    cardNumber: '1279089',
                                    cardMonth: '20',
                                    cardYear: '2051',
                                    cardCvv: '300'
                                }" :is-card-number-masked="masked_not" id="printMe" ref="content" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueCreditCard from '@fracto/vue-credit-card';
import VuePaycard from 'vue-paycard'
import jsPDF from 'jspdf'
import html2canvas from "html2canvas"
import axios from 'axios'
import API from '../../api.config'
export default {
    components: {
        VuePaycard,
        VueCreditCard
        // Table
    },
    data() {
        return {
            detail: {},
            tanggal: new Date().toISOString().slice(0, 10),
            cardTypes: [
                { regEx: /^4[0-9]{5}/ig, name: 'visa', icon: require('../../assets/JDN.png') },
                { regEx: /^5[1-5][0-9]{4}/ig, name: 'mastercard', icon: require('../../assets/JDN.png') },
            ],
            valueFields: {
                cardName: '',
                cardNumber: '',
                cardMonth: '',
                cardYear: '',
                cardCvv: ''
            },
            image: require('../../assets/logo.jpeg'),
            masked_not: false
        }
    },
    created() {
        this.getDetail()
    },
    methods: {
        htmlprint() {
            this.$htmlToPaper('printMe');
        },
        getDetail() {
            axios.get(API + `/M_pengguna/${this.$route.params.id}`)
                .then((response) => {
                    this.detail = response.data
                });
        },
        Printkan(){
            this.$htmlToPaper('printMe');
        },
        // printPDF() {
        //     // let pdfName = this.detail.pengguna_nama;
        //     var doc = new jsPDF("p","mm","Letter");
        //     const contentHtml = this.$refs.content.innerHTML;
        //     // const contentHtml = document.getElementById("content");
        //     doc.fromHTML(contentHtml);
        //     doc.save("semple.pdf");
        // },
        printPDF() {
            const doc = new jsPDF("p", "mm", "Letter");
            /** WITH CSS */
            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            var canvasElement = document.createElement('canvas');
            html2canvas(document.getElementById("content")).then(function(canvas) {
                const img = canvas.toDataURL("image/jpeg", 1);
                doc.addImage(img, 'JPEG', 20, 50);
                doc.save("sample.pdf");
            });

            //     // ----From STAK 
            //     // let pdfName = 'mes-enfants';
            //     // var doc = new jsPDF();

            //     // doc.fromHTML(document.getElementById('print'), 50, 50, {
            //     //     'width': 370
            //     // });

            //     // doc.save(pdfName + '.pdf');


            //     // ---From PRAKTAK
            //     // var pdf = new jsPDF();
            //     // var element = document.getElementById('facture');
            //     // var width = element.style.width;
            //     // var height = element.style.height;
            //     // html2canvas(element).then(canvas => {
            //     //         var image = canvas.toDataURL('image/png');
            //     //         pdf.addImage(image, 'PNG', 150, 40, width, height);
            //     //         pdf.save('facture' + moment(this.facture.date_debut).format('LL') + '_' + moment(this.facture.date_fin).format('LL') + '.pdf';
            //     //         });
        }
    }
};
</script>