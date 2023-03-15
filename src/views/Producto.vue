<template>
 
    <div class="input-group mb-3 container-sm">
        <button class="btn btn-outline-primary" type="button" id="button-addon1" data-bs-toggle="modal"
            data-bs-target="#modal">Nuevo <i class="bi bi-plus-circle"></i></button>
        <input type="search" class="form-control" placeholder="Buscar Producto" aria-label="Recipient's username"
            aria-describedby="button-addon2" v-model="search">
        <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="buscar()"><i class="bi bi-search"></i>
            Buscar</button> 
    </div>

    <div class="container-sm">
        <table class="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>                    
                    <th scope="col">Presentacion</th>
                    <th scope="col">Laboratorio</th>
                    <th scope="col">Observacion</th>
                    <th scope="col">Precio</th>
                    <th scope="col">CategoriaId</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key, index) in listaProductos" :key="index">  <!-- v-show="value.age <= range"  -->
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.nombre }}</td>                    
                    <td>{{ value.presentacion }}</td>
                    <td>{{ value.laboratorio }}</td>
                    <td>{{ value.observacion }}</td>                    
                    <td>{{ value.precio }}</td>
                    <td>{{ value.categoriaId }}</td>                  
                    <td><i class="bi bi-pencil-square" @click="editar(value.id)"></i></td>
                </tr>
        
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalLabel">Nueva Producto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <FormularioNuevoProductoView
                    :inpayload="payload"
                    @on-payload="nuevoProducto($event)"
                    ></FormularioNuevoProductoView>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import FormularioNuevoProductoView from "@/components/FormularioNuevoProducto.vue"
export default {
    name: 'producto',
    props: [],
    emits: [],
    data(){
        return {
            range: 100,
            listaProductos: [],
            search: "",
            api: "",
            payload: {
                nombre: '',
                presentacion: '',
                laboratorio: '',
                observacion: '',
                precio: '',
                categoriaId: ''
            },
            listaCategorias: []
        };
    },
    methods: {
        misProductos() {
            this.axios.get(process.env.VUE_APP_API + "/productos/")
            .then((response) => {
                this.listaProductos = response.data;
                console.log(response.data);
            })
            .catch((err) => { alert(err) })
        },
        editar(value) {
            // console.log(value);
            this.$router.push("/productos/" + value + "/editar");
        },

        nuevoProducto(payload) {
            payload.categoriaId= this.getIdcat(payload.categoriaId);
            this.axios.post(process.env.VUE_APP_API+"/productos/", payload)
            .then((response) => {
                this.payload = {
                nombre: '',
                presentacion: '',
                laboratorio: '',
                observacion: '',
                precio: '',
                categoriaId: ''
                }
                
               this.misProductos();
                console.log(response);
            })
            .catch((err) => { alert(err) })
        },
        getIdcat (categoria){
           // console.log(this.listaCategorias.find(e => e.name==categoria).id);
            return this.listaCategorias.find(e => e.name==categoria).id
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
        this.misProductos();
    },
    components: {
        FormularioNuevoProductoView
        
    }
   
}
</script>