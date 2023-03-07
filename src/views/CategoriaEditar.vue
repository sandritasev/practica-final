<template>
    <div class="container-sm">
        <h2>Editar persona</h2>
        <FormularioNuevaCategoria v-if="isload" :inpayload="payload" @on-payload="editar($event)" mode_edit="true">
        </FormularioNuevaCategoria>
        <h3>Eliminar contacto</h3>
        <div>
            <input type="checkbox" style="margin-right: 10px" :checked="deleted"
                @input="deleted = $event.target.checked" id="eliminar">
            <label for="eliminar"> Eliminar contacto {{deleted }}</label>
            <div style="margin-top: 15px">
                <button type="button" class="btn btn-danger btn-sm" @click="eliminar()">Eliminar</button>
            </div>
        </div>
    </div>
</template>

<script>
import FormularioNuevaCategoria from '@/components/FormularioNuevaCategoria.vue';

export default {
    name: 'CategoriaEditar',
    props: [],
    emits: [],
    data() {
        return {
            categoriaId: 0,
            isload: false,
            deleted: false,
            toast: null,
            payload: {}
        }
    },
    methods: {
        load() {
            this.categoriaId = this.$route.params.id;console.log(this.categoriaId);
        },
        getCategoria() {

            this.axios.get(process.env.VUE_APP_API + "/categorias/" + this.categoriaId)
                .then((response) => { this.payload = response.data; this.isload = true; })
                .catch((err) => { console.log(err) })
        },
        editar(payload) {
            this.axios.patch(process.env.VUE_APP_API + "/categorias/" + this.categoriaId, payload)
                .then((response) => { console.log(response) })
                .catch((err) => { console.log(err) })
        },
        eliminar() {
            if (this.deleted) {
                this.axios.delete(process.env.VUE_APP_API + "/categorias/" + this.categoriaId)
                    .then((response) => {
                        this.payload = response;
                        this.$router.push('/categorias');
                    })
                    .catch((err) => { console.log(err) })
            } else {
                alert('para eliminar debe marcar la casilla de verificacion');
            }

        },
    },
    computed: {
    },
    mounted() {
        this.load();
        this.getCategoria();
    },
    components: {
        FormularioNuevaCategoria
    }
}
</script>

<style>

</style>