<template>
    <div>
        <form @submit.prevent="enviar()">

            <div class="form-outline mb-4">
                <label class="form-label" for="nombre" ref="nombre">Nombre</label>
                <input type="text" v-model="payload.nombre" id="nombre" class="form-control" required />

                <label class="form-label" for="presentacion" ref="presentacion">presentacion</label>
                <input type="text" v-model="payload.presentacion" id="presentacion" class="form-control" required />
               
                <label class="form-label" for="laboratorio" ref="laboratorio">laboratorio</label>
                <input type="text" v-model="payload.laboratorio" id="laboratorio" class="form-control" required />

                <label class="form-label" for="observacion" ref="observacion">observacion</label>
                <input type="text" v-model="payload.observacion" id="observacion" class="form-control" required />


                <label class="form-label" for="precio" ref="precio">precio</label>
                <input type="text" v-model="payload.precio" id="precio" class="form-control" required />


                <label class="form-label" for="categoriaId" ref="categoriaId">categoriaId</label>
                
               
                <select  v-model="payload.categoriaId" class="form-select form-select-sm" id="categoria_Id" aria-label=".form-select-sm example">
                    
                    <option v-for="val in listaCategorias" :key="val.id"   >{{ val.name }}</option>
                  
                </select>
            </div>

            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioNuevoProducto',
    props: {
        inpayload: {},
        mode_edit: {
            type: Boolean,
            default: false
        }
    },
    emits: ["on-payload"],
    data() {
        return {
            categoria_id: 0,
            payload: {
                nombre: "",
                presentacion: "",
                laboratorio: "",
                observacion: "",
                precio: "",
                categoriaId: ""


            },
            listaCategorias: [],
            
        }
    },
    methods: {
        enviar() {
            this.$emit('on-payload', this.payload);
            
            if (!this.mode_edit) {
                
                this.payload = {
                nombre: "",
                presentacion: "",
                laboratorio: "",
                observacion: "",
                precio: "",
                categoriaId: ""
                
                };
                this.$refs.nombre.focus();
            }
        },
        listacategorias() {
            this.axios.get(process.env.VUE_APP_API + "/categorias/")
            .then((response) => {
                this.listaCategorias = response.data;
            })
            .catch((err) => { alert(err) })
        }
    },
    computed: {
    },
    mounted() {
        this.listacategorias();
        this.payload = this.inpayload;
    },
    components: {
    }
}
</script>

<style>

</style>