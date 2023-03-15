<template>
    <div class="container-sm">
        <h2>Editar Producto</h2>
        <FormularioNuevoProducto v-if="isload" :inpayload="payload" @on-payload="editar($event)" mode_edit="true">
        </FormularioNuevoProducto>
        <h3>Eliminar Producto</h3>
        <div>
            <input type="checkbox" style="margin-right: 10px" :checked="deleted"
                @input="deleted = $event.target.checked" id="eliminar">
            <label for="eliminar"> Eliminar Producto {{deleted }}</label>
            <div style="margin-top: 15px">
                <button type="button" class="btn btn-danger btn-sm" @click="eliminar()">Eliminar</button>
            </div>
        </div>
    </div>
</template>

<script>
import FormularioNuevoProducto from '@/components/FormularioNuevoProducto.vue';

export default {
    name: 'ProductoEditar',
    props: [],
    emits: [],
    data() {
        return {
            productoId: 0,
            isload: false,
            deleted: false,
            toast: null,
            payload: {}
        }
    },
    methods: {
        load() {
            this.productoId = this.$route.params.id;console.log(this.productoId);
        },
        getProducto() {

            this.axios.get(process.env.VUE_APP_API + "/productos/" + this.productoId)
                .then((response) => { this.payload = response.data; this.isload = true; })
                .catch((err) => { console.log(err) })
        },
       
        editar(payload) {
            this.axios.patch(process.env.VUE_APP_API + "/productos/" + this.productoId, payload)
                .then((response) => {
                     console.log(response);
                    this.$router.push('/productos'); 
                })
                .catch((err) => { console.log(err) })

        },
        eliminar() {
            if (this.deleted) {
               this.axios.delete(process.env.VUE_APP_API + "/productos/" + this.productoId)
                    .then((response) => {
                        this.payload = response;
                        this.$router.push('/productos');
                    })
                    .catch((err) => { console.log(err) })
              
            } else {
                alert('para eliminar debe marcar la casilla de verificacion');
            }

        }
    },
    computed: {
    },
    mounted() {
        this.load();
        this.getProducto();
    },
    components: {
        FormularioNuevoProducto
    }
}
</script>

<style>

</style>