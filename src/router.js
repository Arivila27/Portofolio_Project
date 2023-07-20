import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import login from './login.vue'
import register from './views/register.vue'

// Menu Pokok
import Home from './views/Home.vue'
import Home_noc from './views/Home_noc.vue'
import About from './views/About.vue'
import Data_pokok from './views/data_pokok/data_pokok.vue'
import Dashboard_data from './views/data_pokok/dashboard_data.vue'
import Data_closing from './views/data_pokok/data_closing.vue'
import Detail_closing from './views/data_pokok/detail_closing.vue'
import List_closing from './views/data_pokok/list_closing.vue'

// Form tambahkan ke saldo 
import saldo from './views/saldo/saldo'


// Form-WD 
import list_wd from './views/Form-WD/dashboard_wd.vue'
import wd_pembayaran from './views/Form-WD/list_wd.vue'
import wd_teknisi from './views/Form-WD/list_wd_teknisi.vue'
import tambah_wd from './views/Form-WD/tambah_wd.vue'
import edit_wd from './views/Form-WD/edit_wd.vue'
import detail_wd from './views/Form-WD/detail_wd.vue'
import upload_wd from './views/Form-WD/upload_wd.vue'

// Master-ID
import master_id from './views/master_id/master_id.vue'
import tambah_master_id from './views/master_id/tambah_master_id.vue'
import detail_master_id from './views/master_id/detail_master_id.vue'

// Admin Cabang tambah 
import tambah_admin from './views/Admin-Cabang/Tambah_admin_cabang.vue'

// Penjadwalan Pegawai 
import penjadwalan from './views/penjadwalan/penjadwalan.vue';
import tambah_penjadwalan from './views/penjadwalan/tambah_penjadwalan.vue';
// Menu Departmen 
import departmen from './views/departmen/departmen.vue'
import tambah_departmen from './views/departmen/tambah_departmen.vue'
import edit_departmen from './views/departmen/edit_departmen.vue'


// Menu IP 
import ip from './views/check-ip/List-ip'
import tambah_ip from './views/check-ip/tambah_ip'
import edit_ip from './views/check-ip/edit_ip'
import detail_ip from './views/check-ip/detail_ip'


// Menu HOst 
import host from './views/host/list_host/list_host.vue'
import create_host from './views/host/create-host/create_host.vue'


// Menu Cabang
import cabang from './views/cabang/List-Cabang.vue'
import tambah_cabang from './views/cabang/tambah_cabang.vue'
import edit_cabang from './views/cabang/edit_cabang.vue'
import detail_cabang from './views/cabang/detail_cabang.vue'

// Menu Domain 
import domain from './views/domain/List-Domain.vue'
import tambah_domain from './views/domain/tambah_domain.vue'
import edit_domain from './views/domain/edit_domain.vue'
import detail_domain from './views/domain/detail_domain.vue'
// ----
// Master harga 
import list_harga from './views/harga/list_harga.vue'
import tambah_harga from './views/harga/tambah_harga.vue'
import update_harga from './views/harga/update_harga.vue'

// Tipe Cash
import kode_akun from './views/kode_akun/kode_akun.vue'
import tambah_kode_akun from './views/kode_akun/tambah_kode_akun.vue'
import edit_kode_akun from './views/kode_akun/edit_kode_akun.vue'
import detail_kode_akun from './views/kode_akun/detail_kode_akun.vue'

//Kode Akun real
import kode_akun_real from './views/kode_akun_real/kode_akun_real.vue'
import tambah_kode_akun_real from './views/kode_akun_real/tambah_kode_akun_real.vue'
import edit_kode_akun_real from './views/kode_akun_real/edit_kode_akun_real.vue'
import detail_kode_akun_real from './views/kode_akun_real/detail_kode_akun_real.vue'
// ----
// Data Pelanggan 
import user from './views/user/user.vue'
import Ganti_alat from './views/user/pelanggan/Ganti_alat/Ganti_alat.vue'
import edit_mikrotik_pelanggan from './views/user/pelanggan/Edit_mikrotik_pelanggan/edit_mikrotik_pelanggan.vue'
import dashboard_pelanggan from './views/user/dashboard_pelanggan.vue'
import pelanggan from './views/user/pelanggan/pelanggan.vue'
import pelanggan_2 from './views/user/pelanggan/pelanggan_2.vue'
import akses_pelanggan from './views/user/pelanggan/akses_pelanggan/akses_pelanggan.vue'
import pelanggan_baru from './views/user/pelanggan/pelanggan_fixbaru.vue'
import detail_pelanggan from './views/user/detail_pelanggan.vue'
import edit_pelanggan from './views/user/pelanggan/Edit_pelanggan/Edit_pelanggan.vue'
import edit_pelanggan1 from './views/user/Update_pelanggan/update_pelanggan'
import upgrade_pelanggan from './views/user/pelanggan/upgrade_pelanggan.vue'
import potongan from './views/user/pelanggan/Potongan/potongan.vue'
import pelanggan_akan_mati from './views/user/pelanggan/pelanggan_akan_mati.vue'
import pelanggan_akan_aktif from './views/user/pelanggan/pelanggan_baru.vue'
import update_pelanggan_baru from './views/user/Update_pelanggan_baru/update_pelanggan_baru'
import pelanggan_putus from './views/user/pelanggan/pelanggan_putus.vue'
import pelanggan_nonaktif from './views/user/pelanggan/pelanggan_nonaktif.vue'
import pegawai from './views/user/pegawai/pegawai.vue'
import list_kegiatan_pegawai from './views/user/pegawai/list_kegiatan_pegawai.vue'
import tambah_pegawai from './views/user/pegawai/tambah_pegawai.vue'
import tambah_pelanggan from './views/user/pelanggan/tambah_pelanggan.vue'
import tambah_pelanggan_tukang from './views/user/pelanggan/tambah_pelanggan_tukang.vue'
import print_nota from './views/user/print_nota.vue'
import print_invoice from './views/user/print_invoice.vue'
import type_pelanggan from './views/user/type/type_pelanggan.vue'
import tambah_type_pelanggan from './views/user/type/tambah_type_pelanggan.vue'
import edit_type_pelanggan from './views/user/type/edit_type_pelanggan.vue'
import upload_ktp from './views/user/pelanggan/upload-ktp/upload_ktp.vue'
// ----
// Report jumlah pegawai yang psb 
import jumlah_pegawai_psb from './views/user/pelanggan/jumlah_pegawai_psb/jumlah_pegawai_psb.vue'
// data supplier master pengguna
import supplier from './views/user/supplier/supplier.vue'
import tambah_supplier from './views/user/supplier/tambah_supplier.vue'
import edit_supplier from './views/user/supplier/edit_supplier.vue'
import detail_supplier from './views/user/supplier/detail_supplier.vue'
// ----
// data user Master_pengguna
// Master item Cuman Dashboard
import item from './views/item/item.vue'
// ---
// Master_produk
import produk from './views/item/produk/produk.vue'
import tambah_item from './views/item/produk/tambah_produk.vue'
import edit_produk from './views/item/produk/edit_produk.vue'
// ----
// Membuat Penagihan 
import penagihan from './views/penagihan/penagihan.vue'
import penagihan_bulanan from './views/penagihan/penagihan_bulanan.vue'
import penagihan_belum from './views/penagihan/penagihan_belum.vue'
import edit_penagihan from './views/penagihan/edit_penagihan.vue'
import total_penagihan_registrasi from './views/penagihan/register/total_penagihan.vue'
import total_penagihan_outstanding from './views/penagihan/outstanding/total_penagihan.vue'
import closing_bulanan from './views/penagihan/closing/hasil_closing.vue'
import closing from './views/penagihan/closing/closing'
import total_penagihan_bulanan from './views/penagihan/total_penagihan.vue'
import total_penagihan_keseluruhan from './views/penagihan/total_penagihan/total_penagihan.vue'
import print_penagihan from './views/penagihan/total_penagihan/print_penagihan/print_penagihan.vue'
import print_penagihan_thermal from './views/penagihan/total_penagihan/print_penagihan/print_penagihan_thermal.vue'
import laporan_harian from './views/penagihan/laporan_harian_pembayaran/total_penagihan.vue'
import transaksi_masuk from './views/penagihan/transaksi_masuk/transaksi_masuk.vue'
// ----

// Konfirmasi upgrade/downgrade paket 
import konfirmasi_upgrade_paket from './views/transaksi/konfirmasi_upgrade_paket/list_konfirmasi_upgrade_paket.vue'
import update_konfirmasi_upgrade_paket from './views/transaksi/konfirmasi_upgrade_paket/update_konfirmasi_upgrade_paket.vue'
// Membuat Invoice 
import invoice from './views/transaksi/invoice/trinvoice.vue'
import tambah_invoice from './views/transaksi/invoice/tambah_invoice.vue'
import detail_invoice from './views/transaksi/invoice/detail_invoice.vue'
// ----
// Master barang
import barang from './views/item/barang/barang.vue'
import tambah_barang from './views/item/barang/tambah_barang.vue'
import barang_biasa from './views/item/barang/barang_biasa.vue'
import tambah_barang_biasa from './views/item/barang/tambah_barang_biasa.vue'
import edit_barang_biasa from './views/item/barang/edit_barang_biasa.vue'
// ----
// Master Project 
import project from './views/item/project/project.vue'
import tambah_project from './views/item/project/tambah_project.vue'
import edit_project from './views/item/project/edit_project.vue'
// ----
// Master Alat
import Alat from './views/item/alat/alat.vue'
import tambah_alat from './views/item/alat/tambah_alat'
// ---- 
// Master Daerah 
import daerah from './views/daerah/List-daerah'
import tambah_daerah from './views/daerah/tambah_daerah'
import detail_daerah from './views/daerah/detail_daerah'
// Maintenance
// Master Divisi 
import divisi from './views/divisi/list_divisi'
import tambah_divisi from './views/divisi/tambah_divisi'

// ---
// Transaksi Absensi 
import trabsensi from './views/transaksi/trabsensi';

// Transaksi PO 
import trpo from './views/transaksi/purchase_order/list_po';
import tambah_trpo from './views/transaksi/purchase_order/tambah_po';
import detail_trpo from './views/transaksi/purchase_order/detail_po';
import edit_trpo from './views/transaksi/purchase_order/edit_po';
// transaksi_complain
import dashboard_complain from './views/transaksi/trans_complain/dashboard_complain.vue'
import trcomplain from './views/transaksi/trans_complain/trcomplain.vue'
import trcomplain_proses from './views/transaksi/trans_complain/trcomplain_proses.vue'
import trcomplain_selesai from './views/transaksi/trans_complain/trcomplain_selesai.vue'
import trcomplain_penanganan from './views/transaksi/trans_complain/trpenanganan.vue'
import tambah_complain from './views/transaksi/trans_complain/tambah_complain.vue'
// ----
import trinventori from './views/transaksi/trinventori.vue'
// ----
// Transaksi Kas Dan Bank 
import trkasbank from './views/transaksi/kasbank_real/trkasbank_real.vue'
import kasbank_real from './views/transaksi/kasbank_real/List-Kasbank/list_kasbank.vue'
import tambah_kasbank_real from './views/transaksi/kasbank_real/List-Kasbank/tambah_kasbank.vue'
import closing_debit from './views/transaksi/kasbank_real/List-Kasbank/Table-Kasbank/closing/closing_debit.vue'
import closing_kredit from './views/transaksi/kasbank_real/List-Kasbank/Table-Kasbank/closing/closing_kredit.vue'

// ----
// Laporan Transaksi Kas Dan Bank(Closing )
import trkasbank_closing from './views/transaksi/kasbank_real/closing/closing.vue'
import tambah_trkasbank_closing from './views/transaksi/kasbank_real/closing/tambah_closing.vue'
import detail_trkasbank_closing from './views/transaksi/kasbank_real/closing/detail_closing.vue'

// ----
//Transaksi Voucher

import voucher from './views/transaksi/voucher/voucher.vue'
// Transaksi Pengeluaran 
import pengeluaran from './views/transaksi/kasbank/pengeluaran/pengeluaran.vue'
import tambah_pengeluaran from './views/transaksi/kasbank/pengeluaran/tambah_pengeluaran.vue'
import edit_pengeluaran from './views/transaksi/kasbank/pengeluaran/edit_pengeluaran.vue'
import pengeluaran_invoice from './views/transaksi/kasbank/pengeluaran/pengeluaran_invoice.vue'
// ----
// Transaksi Pemasukan 
import pemasukan from './views/transaksi/kasbank/pemasukan/pemasukan.vue'
import tambah_pemasukan from './views/transaksi/kasbank/pemasukan/tambah_pemasukan.vue'
import edit_pemasukan from './views/transaksi/kasbank/pemasukan/edit_pemasukan.vue'
import pemasukan_invoice from './views/transaksi/kasbank/pemasukan/pemasukan_invoice.vue'
// ----
// Transaksi Transfer Tunai 
import transfer from './views/transaksi/kasbank/transfer/transfer.vue'
import tambah_transfer from './views/transaksi/kasbank/transfer/tambah_transfer.vue'
import edit_transfer from './views/transaksi/kasbank/transfer/edit_transfer.vue'
import transfer_invoice from './views/transaksi/kasbank/transfer/transfer_invoice.vue'
// ----
// ----
// Transaksi E-commerce
// Pembelian 
import pembelian from './views/transaksi/e_commerce/pembelian.vue'
import tambah_pembelian from './views/transaksi/e_commerce/pembelian/tambah_pembelian.vue'
import pembelian_finance from './views/transaksi/e_commerce/pembelian_finance.vue'
import verify_pembelian from './views/transaksi/e_commerce/verifikasi_pembelian.vue'
import detail_pembelian from './views/transaksi/e_commerce/pembelian/detail_pembelian.vue'
import membeli from './views/transaksi/e_commerce/pembelian/list_pembelian.vue'
// ----
import perjalanan_dinas from './views/transaksi/perdin/list_perdin.vue'
import tambah_perjalanan_dinas from './views/transaksi/perdin/tambah_perdin.vue'
import detail_perjalanan_dinas from './views/transaksi/perdin/detail_perdin.vue'
// penjualan
import penjualan from './views/transaksi/e_commerce/penjualan.vue'
import menjual from './views/transaksi/e_commerce/menjual.vue'
import tambah_menjual from './views/transaksi/e_commerce/tambah_menjual.vue'
// ----
// ----
// Report 
import report from './views/report/report.vue'
import report_mybitniaga from './views/report/aplikasi/report_mybitniaga.vue'
import report_pelanggan from './views/report/pelanggan/report_pelanggan.vue'
import report_pelanggan_harian from './views/report/pelanggan/report_pelanggan_harian.vue'
import report_pelanggan_bulanan from './views/report/pelanggan/report_pelanggan_bulanan.vue'
import report_pelanggan_tahunan from './views/report/pelanggan/report_pelanggan_tahunan.vue'

//
import report_pemasangan_baru from './views/report/pemasangan_baru/report_pemasangan_baru.vue'
import report_pemasangan_baru_harian from './views/report/pemasangan_baru/report_pemasangan_baru_harian.vue'
import report_pemasangan_baru_bulanan from './views/report/pemasangan_baru/report_pemasangan_baru_bulanan.vue'
import report_pemasangan_baru_tahunan from './views/report/pemasangan_baru/report_pemasangan_baru_tahunan.vue'
// ----
//report pembayaran

import report_pembayaran from './views/report/pembayaran/report_pembayaran.vue'
import report_pembayaran_harian from './views/report/pembayaran/report_pembayaran_harian.vue'
import report_pembayaran_bulanan from './views/report/pembayaran/report_pembayaran_bulanan.vue'
import report_pembayaran_registrasi from './views/report/pembayaran/report_pembayaran_registrasi.vue'
import report_pembayaran_outstanding from './views/report/pembayaran/report_pembayaran_outstanding.vue'
// Report VA BCA mybitniaga 
import report_laporan_va_bca from './views/report/aplikasi/laporan_va_bca/laporan_va_bca.vue'
import va_bca_inquiry from './views/report/aplikasi/laporan_va_bca/Inquiry/va_bca_inquiry.vue'
import va_bca_payment from './views/report/aplikasi/laporan_va_bca/Payment/va_bca_payment.vue'
// ----
// Report Project 
import report_project from './views/report/project/report_project.vue'
import report_pembuatan_project from './views/report/project/project_pembuatan/report_pembuatan_project.vue'
import report_penjualan_project from './views/report/project/project_penjualan/report_penjualan_project.vue'
import report_psb from './views/report/project/psb/psb.vue'
// ----
// Report Complain
import report_complain from './views/report/complain/report_complain.vue'
import report_complain_baru from './views/report/complain/complain_baru/report_complain_baru.vue'
import report_complain_selesai from './views/report/complain/complain_selesai/report_complain_selesai.vue'
// ----
// Report Penagihan 
import report_penagihan from './views/report/report_penagihan/report_penagihan.vue'
// ----
// Report Barang 
import report_barang from './views/report/report_barang/report_barang.vue'
import report_barang_masuk from './views/report/report_barang/report_barang_masuk.vue'
import report_barang_keluar from './views/report/report_barang/report_barang_keluar.vue'
// ----
// Report VA 
import report_va from './views/report/report_va/report_va.vue'




// Log from mybitniaga 
import log_complain from './views/log/log_komplain/list_log_complain.vue'
import log_pembayaran from './views/log/log_pembayaran/list_log_pembayaran.vue'
import log_pendaftaran from './views/log/log_pendaftaran/list_log_pendaftaran.vue'
import log_topup from './views/log/log_topup/list_log_topup.vue'


// Master from mybitniaga 
import mybitniaga_transaksi from './views/mybitniaga-developer/Transaksi/list_transaksi.vue'
import mybitniaga_mpembayaran from './views/mybitniaga-developer/Mpembayaran/list_mpembayaran.vue'
import mybitniaga_topup from './views/mybitniaga-developer/Topup/list_topup.vue'
import mybitniaga_mgroup from './views/mybitniaga-developer/Mgroup/list_mgroup.vue'
import mybitniaga_saldo from './views/mybitniaga-developer/Saldo/list_saldo.vue'


Vue.use(Router)
let router = new Router({
    mode: 'history',
    routes: [
        { path: '/register', name: 'register', component: register },
        { path: '/', name: 'login', component: login },
        // Menu Pokok
        { path: '/dashboard', name: 'dashboard', component: Home, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true, nocAuth: true, developerAuth: true } },
        { path: '/Home_noc', name: 'Home_noc', component: Home_noc, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true, nocAuth: true, developerAuth: true } },
        { path: '/about', name: 'about', component: About, meta: { requiresAuth: true, marketingAuth: false, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/data_pokok', name: 'data_pokok', component: Data_pokok, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/dashboard_data', name: 'dashboard_data', component: Dashboard_data, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/list_wd', name: 'list_wd', component: list_wd, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/data_closing', name: 'data_closing', component: Data_closing, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/detail_closing', name: 'detail_closing', component: Detail_closing, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/list_closing', name: 'list_closing', component: List_closing, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/penjadwalan', name: 'penjadwalan', component: penjadwalan, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_penjadwalan', name: 'tambah_penjadwalan', component: tambah_penjadwalan, meta: { requiresAuth: true, marketingAuth: true, tukangAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/item', name: 'item', component: item, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_admin', name: 'tambah_admin', component: tambah_admin, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: true, nocAuth: false } },
        // ---

        // Master Harga 
        { path: '/list_harga', name: 'list_harga', component: list_harga, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_harga', name: 'tambah_harga', component: tambah_harga, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/update_harga/:id', name: 'update_harga', component: update_harga, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },

        // ----
        // Tipe Cash
        { path: '/kode_akun', name: 'kode_akun', component: kode_akun, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_kode_akun', name: 'tambah_kode_akun', component: tambah_kode_akun, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/edit_kode_akun/:id', name: 'edit_kode_akun', component: edit_kode_akun, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/detail_kode_akun/:id', name: 'detail_kode_akun', component: detail_kode_akun, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // ---

         // Kode Akun Real
         { path: '/kode_akun_real', name: 'kode_akun_real', component: kode_akun_real, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
         { path: '/tambah_kode_akun_real', name: 'tambah_kode_akun_real', component: tambah_kode_akun_real, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
         { path: '/edit_kode_akun_real/:id', name: 'edit_kode_akun_real', component: edit_kode_akun_real, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
         { path: '/detail_kode_akun_real/:id', name: 'detail_kode_akun_real', component: detail_kode_akun_real, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // MAster Departmen 
        { path: '/departmen', name: 'departmen', component: departmen, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_departmen', name: 'tambah_departmen', component: tambah_departmen, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_departmen/:id', name: 'edit_departmen', component: edit_departmen, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Master IP 
        { path: '/ip', name: 'ip', component: ip, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_ip', name: 'tambah_ip', component: tambah_ip, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_ip/:id', name: 'edit_ip', component: edit_ip, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_ip/:id', name: 'detail_ip', component: detail_ip, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: false, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Master Host 
        { path: '/host', name: 'host', component: host, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/create_host', name: 'create_host', component: create_host, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },

        // Master Cabang 
        { path: '/cabang', name: 'cabang', component: cabang, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_cabang', name: 'tambah_cabang', component: tambah_cabang, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_cabang/:id', name: 'edit_cabang', component: edit_cabang, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_cabang/:id', name: 'detail_cabang', component: detail_cabang, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: false, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Master Domain
        { path: '/domain', name: 'domain', component: domain, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_domain', name: 'tambah_domain', component: tambah_domain, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_domain/:id', name: 'edit_domain', component: edit_domain, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_domain/:id', name: 'detail_domain', component: detail_domain, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: false, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Master ID 
        { path: '/master_id', name: 'master_id', component: master_id, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_master_id', name: 'tambah_master_id', component: tambah_master_id, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_master_id/:id', name: 'detail_master_id', component: detail_master_id, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Form saldo
        { path: '/saldo', name: 'saldo', component: saldo, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // Form-WD
        { path: '/wd_pembayaran', name: 'wd_pembayaran', component: wd_pembayaran, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/wd_teknisi', name: 'wd_teknisi', component: wd_teknisi, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_wd', name: 'tambah_wd', component: tambah_wd, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_wd/:id', name: 'detail_wd', component: detail_wd, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_wd/:id', name: 'edit_wd', component: edit_wd, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/upload_wd/:id', name: 'upload_wd', component: upload_wd, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Master_produk
        { path: '/produk', name: 'produk', component: produk, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_item', name: 'tambah_item', component: tambah_item, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_produk/:id', name: 'edit_produk', component: edit_produk, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Master Barang
        { path: '/barang', name: 'barang', component: barang, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_barang', name: 'tambah_barang', component: tambah_barang, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/barang_biasa', name: 'barang_biasa', component: barang_biasa, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_barang_biasa', name: 'tambah_barang_biasa', component: tambah_barang_biasa, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_barang_biasa/:id', name: 'edit_barang_biasa', component: edit_barang_biasa, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        //----
        //MasterProject
        { path: '/project', name: 'project', component: project, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_project', name: 'tambah_project', component: tambah_project, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_project/:id', name: 'edit_project', component: edit_project, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        //----
        // Master Alat 
        { path: '/alat', name: 'alat', component: Alat, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_alat', name: 'tambah_alat', component: tambah_alat, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----

        // Master Daerah 
        { path: '/daerah', name: 'daerah', component: daerah, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_daerah', name: 'tambah_daerah', component: tambah_daerah, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_daerah/:id', name: 'detail_daerah', component: detail_daerah, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Master Divisi 
        { path: '/divisi', name: 'divisi', component: divisi, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_divisi', name: 'tambah_divisi', component: tambah_divisi, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },

        //Master_Tunjangan
        //master_userbesertadata-datanya
        { path: '/user', name: 'user', component: user, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_mikrotik_pelanggan/:id', name: 'edit_mikrotik_pelanggan', component: edit_mikrotik_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/Ganti_alat/:id', name: 'Ganti_alat', component: Ganti_alat, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_pelanggan', name: 'tambah_pelanggan', component: tambah_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } }, //datauserpelangganDLL
        { path: '/tambah_pelanggan_tukang', name: 'tambah_pelanggan_tukang', component: tambah_pelanggan_tukang, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } }, //datauserpelangganDLL
        { path: '/dashboard_pelanggan', name: 'dashboard_pelanggan', component: dashboard_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/pelanggan_akan_mati', name: 'pelanggan_akan_mati', component: pelanggan_akan_mati, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/pelanggan_akan_aktif', name: 'pelanggan_akan_aktif', component: pelanggan_akan_aktif, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/update_pelanggan_baru/:id', name: 'update_pelanggan_baru', component: update_pelanggan_baru, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/pelanggan', name: 'pelanggan', component: pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/pelanggan_2', name: 'pelanggan_2', component: pelanggan_2, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/akses_pelanggan', name: 'akses_pelanggan', component: akses_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/pelanggan_baru', name: 'pelanggan_baru', component: pelanggan_baru, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_pelanggan/:id', name: 'detail_pelanggan', component: detail_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_pelanggan/:id', name: 'edit_pelanggan', component: edit_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_pelanggan1/:id', name: 'edit_pelanggan1', component: edit_pelanggan1, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/upgrade_pelanggan/:id/:ppoe', name: 'upgrade_pelanggan', component: upgrade_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/potongan/:id', name: 'potongan', component: potongan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/pelanggan_putus', name: 'pelanggan_putus', component: pelanggan_putus, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } }, //MasterSupplier
        { path: '/pelanggan_nonaktif', name: 'pelanggan_nonaktif', component: pelanggan_nonaktif, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } }, //MasterSupplier
        { path: '/print_nota/:id', name: 'print_nota', component: print_nota, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/print_invoice/:id', name: 'print_invoice', component: print_invoice, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/type_pelanggan', name: 'type_pelanggan', component: type_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_type_pelanggan', name: 'tambah_type_pelanggan', component: tambah_type_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_type_pelanggan/:id', name: 'edit_type_pelanggan', component: edit_type_pelanggan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        { path: '/upload_ktp/:id', name: 'upload_ktp', component: upload_ktp, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        //----
        // Jumlah pegawai psb
        { path: '/jumlah_pegawai_psb', name: 'jumlah_pegawai_psb', component: jumlah_pegawai_psb, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Supplier 
        { path: '/supplier', name: 'supplier', component: supplier, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_supplier', name: 'tambah_supplier', component: tambah_supplier, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/edit_supplier/:id', name: 'edit_supplier', component: edit_supplier, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/detail_supplier/:id', name: 'detail_supplier', component: detail_supplier, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        { path: '/pegawai', name: 'pegawai', component: pegawai, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/list_kegiatan_pegawai/:id', name: 'list_kegiatan_pegawai', component: list_kegiatan_pegawai, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        { path: '/tambah_pegawai', name: 'tambah_pegawai', component: tambah_pegawai, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },

        // Transaksi Absensi 
        { path: '/trabsensi', name: 'trabsensi', component: trabsensi, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        //Transaksi Voucher
        { path: '/voucher', name: 'voucher', component: voucher, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // Transaksi Po
        { path: '/trpo', name: 'trpo', component: trpo, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/tambah_trpo', name: 'tambah_trpo', component: tambah_trpo, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/detail_trpo/:id', name: 'detail_trpo', component: detail_trpo, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/edit_trpo/:id', name: 'edit_trpo', component: edit_trpo, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        //transaksi_complain
        { path: '/trcomplain', name: 'trcomplain', component: trcomplain, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        { path: '/trcomplain_proses', name: 'trcomplain_proses', component: trcomplain_proses, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        { path: '/trcomplain_selesai', name: 'trcomplain_selesai', component: trcomplain_selesai, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        { path: '/trcomplain_penanganan', name: 'trcomplain_penanganan', component: trcomplain_penanganan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        { path: '/tambah_complain', name: 'tambah_complain', component: tambah_complain, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        { path: '/dashboard_complain', name: 'dashboard_complain', component: dashboard_complain, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true, nocAuth: true } },
        //----
        //Penagihan
        { path: '/penagihan', name: 'penagihan', component: penagihan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/penagihan_bulanan', name: 'penagihan_bulanan', component: penagihan_bulanan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/penagihan_belum', name: 'penagihan_belum', component: penagihan_belum, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/edit_penagihan/:id', name: 'edit_penagihan', component: edit_penagihan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/closing_bulanan', name: 'closing_bulanan', component: closing_bulanan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/closing', name: 'closing', component: closing, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/total_penagihan', name: 'total_penagihan', component: total_penagihan_bulanan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/print_penagihan/:id', name: 'print_penagihan', component: print_penagihan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/print_penagihan_thermal/:id', name: 'print_penagihan_thermal', component: print_penagihan_thermal, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/total_penagihan_keseluruhan', name: 'total_penagihan_keseluruhan', component: total_penagihan_keseluruhan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/laporan_harian', name: 'laporan_harian', component: laporan_harian, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/transaksi_masuk', name: 'transaksi_masuk', component: transaksi_masuk, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/total_penagihan_regis', name : 'total_penagihan_registrasi' , component : total_penagihan_registrasi, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/total_penagihan_outstanding', name : 'total_penagihan_outstanding' , component : total_penagihan_outstanding, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        //----
        // konfirmasi upgrade paket 
        { path: '/konfirmasi_upgrade_paket', name: 'konfirmasi_upgrade_paket', component: konfirmasi_upgrade_paket, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/update_konfirmasi_upgrade_paket/:id', name: 'update_konfirmasi_upgrade_paket', component: update_konfirmasi_upgrade_paket, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },

        // Transaksi Invoice 
        { path: '/invoice', name: 'invoice', component: invoice, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_invoice', name: 'tambah_invoice', component: tambah_invoice, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/detail_invoice/:id', name: 'detail_invoice', component: detail_invoice, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // ----
        //transaksi_inventori
        { path: '/trinventori', name: 'inventori', component: trinventori, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----

        // Transaksi Kas Dan BAnk 
        { path: '/trkasbank', name: 'trkasbank', component: trkasbank, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/kasbank_real', name: 'kasbank_real', component: kasbank_real, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_kasbank_real', name: 'tambah_kasbank_real', component: tambah_kasbank_real, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // Closing dengan Detailnya kasbank 
        { path: '/closing_debit/:id/:menu', name: 'closing_debit', component: closing_debit, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/closing_kredit/:id/:menu', name: 'closing_kredit', component: closing_kredit, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // Transaksi Kas dan Bank Report / Closing 
        { path: '/trkasbank_closing', name: 'trkasbank_closing', component: trkasbank_closing, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_trkasbank_closing', name: 'tambah_trkasbank_closing', component: tambah_trkasbank_closing, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/detail_trkasbank_closing/:id', name: 'detail_trkasbank_closing', component: detail_trkasbank_closing, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // Transaksi Pengeluaran 
        { path: '/pengeluaran', name: 'pengeluaran', component: pengeluaran, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_pengeluaran', name: 'tambah_pengeluaran', component: tambah_pengeluaran, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/edit_pengeluaran/:id', name: 'edit_pengeluaran', component: edit_pengeluaran, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/pengeluaran_invoice/:id', name: 'pengeluaran_invoice', component: pengeluaran_invoice, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // ----
        // Trannsaksi Pemasukan 
        { path: '/pemasukan', name: 'pemasukan', component: pemasukan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_pemasukan', name: 'tambah_pemasukan', component: tambah_pemasukan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/edit_pemasukan/:id', name: 'edit_pemasukan', component: edit_pemasukan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/pemasukan_invoice/:id', name: 'pemasukan_invoice', component: pemasukan_invoice, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // ----
        // Transaksi Transfer tunai 
        { path: '/transfer', name: 'transfer', component: transfer, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_transfer', name: 'tambah_transfer', component: tambah_transfer, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/edit_transfer/:id', name: 'edit_transfer', component: edit_transfer, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/transfer_invoice/:id', name: 'transfer_invoice', component: transfer_invoice, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // ----
        // ----
        //TransaksiE-commerce
        //Transaksipembelian
        { path: '/pembelian', name: 'pembelian', component: pembelian, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/detail_pembelian/:id', name: 'detail_pembelian', component: detail_pembelian, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/pembelian_finance', name: 'pembelian_finance', component: pembelian_finance, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: false, financeAuth: true, adminAuth: true } },
        { path: '/verifikasi_pembelian/:id', name: 'verifikasi_pembelian', component: verify_pembelian, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: false, financeAuth: true, adminAuth: true } },
        { path: '/membeli', name: 'membeli', component: membeli, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_pembelian', name: 'tambah_pembelian', component: tambah_pembelian, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        //----
        //Transaksipenjualan
        { path: '/penjualan', name: 'penjualan', component: penjualan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: false, adminAuth: true } },
        // Transaksi Penjualan 
        { path: '/menjual', name: 'menjual', component: menjual, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/tambah_menjual/:id', name: 'tambah_menjual', component: tambah_menjual, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: false, adminAuth: true } },
        //----
        // Transaksi Perjalanan Dinas 
        { path: '/perjalanan_dinas', name: 'perjalanan_dinas', component: perjalanan_dinas, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/tambah_perjalanan_dinas', name: 'tambah_perjalanan_dinas', component: tambah_perjalanan_dinas, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/detail_perjalanan_dinas/:id', name: 'detail_perjalanan_dinas', component: detail_perjalanan_dinas, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: false, adminAuth: true } },
        //----
        //Report
        { path: '/report', name: 'report', component: report, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // Report Aplikasi
        { path: '/report_mybitniaga', name: 'report_mybitniaga', component: report_mybitniaga, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // Report VA BCA 
        { path: '/report_laporan_va_bca', name: 'report_laporan_va_bca', component: report_laporan_va_bca, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/va_bca_inquiry', name: 'va_bca_inquiry', component: va_bca_inquiry, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true } },
        { path: '/va_bca_payment', name: 'va_bca_payment', component: va_bca_payment, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true } },
        //ReportPelanggan
        { path: '/report_pelanggan', name: 'report_pelanggan', component: report_pelanggan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pelanggan_harian', name: 'report_pelanggan_harian', component: report_pelanggan_harian, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pelanggan_bulanan', name: 'report_pelanggan_bulanan', component: report_pelanggan_bulanan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pelanggan_tahunan', name: 'report_pelanggan_tahunan', component: report_pelanggan_tahunan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        // ----
        //report pembayaran
        { path: '/report_pembayaran', name: 'report_pembayaran', component: report_pembayaran, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pembayaran_harian', name: 'report_pembayaran_harian', component: report_pembayaran_harian, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pembayaran_bulanan', name: 'report_pembayaran_bulanan', component: report_pembayaran_bulanan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pembayaran_registrasi', name: 'report_pembayaran_registrasi', component: report_pembayaran_registrasi, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pembayaran_outstanding', name: 'report_pembayaran_outstanding', component: report_pembayaran_outstanding, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        // Report Pemasangan Baru 
        { path: '/report_pemasangan_baru', name: 'report_pemasangan_baru', component: report_pemasangan_baru, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pemasangan_baru_harian', name: 'report_pemasangan_baru_harian', component: report_pemasangan_baru_harian, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pemasangan_baru_bulanan', name: 'report_pemasangan_baru_bulanan', component: report_pemasangan_baru_bulanan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        { path: '/report_pemasangan_baru_tahunan', name: 'report_pemasangan_baru_tahunan', component: report_pemasangan_baru_tahunan, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        // ----
        //ReportProject
        { path: '/report_project', name: 'report_project', component: report_project, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        //ReportPembuatanProject
        { path: '/report_pembuatan_project', name: 'report_pembuatan_project', component: report_pembuatan_project, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        //----
        //ReportPenjualanProject
        { path: '/report_penyelesaian_project', name: 'report_penjualan_project', component: report_penjualan_project, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        //----
        // Report Rekapan PSB 
        { path: '/report_rekap_psb', name: 'report_rekap_psb', component: report_psb, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: true, adminAuth: true } },
        //----
        //ReportComplain
        { path: '/report_complain', name: 'report_complain', component: report_complain, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        //ReportComplainBaru
        { path: '/report_complain_baru', name: 'report_complain_baru', component: report_complain_baru, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        //----
        //ReportComplainSelesai
        { path: '/report_complain_selesai', name: 'report_complain_selesai', component: report_complain_selesai, meta: { requiresAuth: true, tukangAuth: true, marketingAuth: true, financeAuth: false, adminAuth: true } },
        //----
        //----
        // Report Penagihan 
        { path: '/report_penagihan', name: 'report_penagihan', component: report_penagihan, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true } },
        // ----
        // Report Barang 
        { path: '/report_barang', name: 'report_barang', component: report_barang, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // Report Barang masuk 
        { path: '/report_barang_masuk', name: 'report_barang_masuk', component: report_barang_masuk, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Report Barang Keluar 
        { path: '/report_barang_keluar', name: 'report_barang_keluar', component: report_barang_keluar, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },
        // ----
        // Report Virtual Account 
        { path: '/report_va', name: 'report_va', component: report_va, meta: { requiresAuth: true, tukangAuth: false, marketingAuth: true, financeAuth: true, adminAuth: true, nocAuth: true } },

        // Log just for Developer 
        { path: '/log_complain', name: 'log_complain', component: log_complain, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        { path: '/log_pembayaran', name: 'log_pembayaran', component: log_pembayaran, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        { path: '/log_pendaftaran', name: 'log_pendaftaran', component: log_pendaftaran, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        { path: '/log_topup', name: 'log_topup', component: log_topup, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        // ----
        // Mybitniaga Master Data for check by developer 
        { path: '/mybitniaga_transaksi', name: 'mybitniaga_transaksi', component: mybitniaga_transaksi, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        { path: '/mybitniaga_mpembayaran', name: 'mybitniaga_mpembayaran', component: mybitniaga_mpembayaran, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        { path: '/mybitniaga_topup', name: 'mybitniaga_topup', component: mybitniaga_topup, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        { path: '/mybitniaga_mgroup', name: 'mybitniaga_mgroup', component: mybitniaga_mgroup, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } },
        { path: '/mybitniaga_saldo', name: 'mybitniaga_saldo', component: mybitniaga_saldo, meta: { requiresAuth: false, tukangAuth: false, marketingAuth: false, financeAuth: false, adminAuth: false, nocAuth: false, developerAuth: true } }

    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            if (store.getters.role === 'Marketing' && to.meta.marketingAuth) {
                next()
            } else if (store.getters.role === 'Tukang' && to.meta.tukangAuth) {
                next()
            } else if (store.getters.role === 'Finance' && to.meta.financeAuth) {
                next()
            } else if (store.getters.role === 'Admin' && to.meta.adminAuth) {
                next()
            } else if (store.getters.role === 'Magang' && to.meta.marketingAuth) {
                next()
            } else if (store.getters.role === 'Noc' && to.meta.nocAuth) {
                next()
            } else if (store.getters.role === 'Developer' && to.meta.developerAuth) {
                next()
            } else {
                next('/')
            }
            return
        }
        next('/')
    } else {
        next()
    }
});

export default router