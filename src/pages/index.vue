<script setup="">
	import {ref, watchEffect} from 'vue'
	import dataSurat from './dataSurat'
	import {Head} from '@vueuse/head'
	import localforage from 'localforage'

	const nomorHalaman = ref('')
	const juz = ref('')
	const surat = ref('')

	async function init(){
		let data = await localforage.getItem('getAyat')
		if (data){
			nomorHalaman.value = data
		}
	}
	init()

	function simpan(){
		localforage.setItem('getAyat', nomorHalaman.value)
	}

	watchEffect(nomorHalaman => simpan())

	function olahJuz(){
		let listDatang = nomorHalaman.value.split('\n').filter(x => x)
		let listHasil = []
		for (let x of listDatang){
			let juznya = 0
			if (x == 1){
				juznya = 1
			} else if (x < 602){
				let nilai = (x-1) / 20
				nilai = Math.ceil(nilai)
				juznya = nilai
			} else if (x <= 604) {
				juznya = 30
			} else {
				juznya = ''
			}
			listHasil = [...listHasil, juznya]
		}
		juz.value = listHasil.join('<br />')
	}

	function olahSurat(){
		let list = nomorHalaman.value.split('\n').filter(y => y)
		let listHasil = []
		for (let x of list){
			listHasil = [...listHasil, dataSurat[x-1]]
		}
		listHasil = listHasil.join('<br />')
		surat.value = listHasil
	}

	async function olah(){
		olahJuz()
		olahSurat()
	}
</script>

<template>
	<Head>
		<title>Get Ayat</title>
	</Head>
	
	<div class="w-full min-h-screen bg-green-200 p-7">
		
		<form action="" @submit.prevent='olah'>
			<div class="row grid grid-cols-3 gap-5">
				<div class="col">
					<div class="mb-3">
						<label  for="" class="form-label">Quran Page Number</label>
						<textarea name="" id="" cols="30" rows="10" v-model='nomorHalaman' class="form-control w-full p-2 focus:outline-none" required="required"></textarea>
					</div>
					<div class="mb-3">
						<input type="submit" value="Generate" class="btn hover:outline hover:outline-slate-500 focus:outline focus:outline-slate-500 cursor-pointer bg-slate-900 rounded px-5 py-2 btn-success text-slate-200" />
					</div>
				</div>
				<div class="col">
					<div class="mb-3">
						<label for="" class="form-label">Juz</label>
						<div class="form-control hasil" v-html='juz'></div>
					</div>
				</div>
				<div class="col">
					<div class="mb-3">
						<label for="" class="form-label">Surat</label>
						<div class="form-control hasil" v-html='surat'></div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<style scoped="">
	.form-label {
		@apply mb-2
	}
	textarea, .hasil {
		@apply h-110
	}
	.form-control.hasil {
		@apply select-all bg-white overflow-y-auto p-2
	}
	.form-label, .form-control {
		@apply block
	}
</style>