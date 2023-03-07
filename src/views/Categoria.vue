<template>
    <div class="input-group mb-3 container-sm">
        <button class="btn btn-outline-primary" type="button" id="button-addon1" data-bs-toggle="modal"
            data-bs-target="#modal">Nuevo <i class="bi bi-plus-circle"></i></button>
        <input type="search" class="form-control" placeholder="Buscar categoria" aria-label="Recipient's username"
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
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key, index) in listaCategorias" :key="index">  <!-- v-show="value.age <= range"  -->
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.name }}</td>
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
                    <h1 class="modal-title fs-5" id="modalLabel">Nueva Categoria</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <FormularioNuevaCategoriaView
                    :inpayload="payload"
                    @on-payload="nuevoCategoria($event)"
                    ></FormularioNuevaCategoriaView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormularioNuevaCategoriaView from "@/components/FormularioNuevaCategoria.vue"
// import axios from "axios";
export default {
    name: 'Categoria',
    props: [],
    emits: [],
    data() {
      return {
        range: 100,
        listaCategorias: [],
        search:"",
        api: "",
        payload: {
          name: ''
        }
      }
    },
    methods: {
        misCategorias() {
            this.axios.get(process.env.VUE_APP_API + "/categorias/")
            .then((response) => {
                this.listaCategorias = response.data;
                console.log(response.data);
            })
            .catch((err) => { alert(err) })
        },
        editar(value) {
            // console.log(value);
            this.$router.push("/categorias/" + value + "/editar");
        },
        nuevoCategoria(payload) {
            this.axios.post(process.env.VUE_APP_API+"/categorias/", payload)
            .then((response) => {
                this.payload = {
                name: ''
                }
                
                this.misCategorias();
                console.log(response);
            })
            .catch((err) => { alert(err) })
        },
        buscar(){
            let categorias = [];
            this.listaCategorias.forEach(e =>{
                if ((this.search.length > 2) && (e.name.includes(this.search) && e.name.toLowerCase().includes(this.search))) {
                    categorias.push(e);
                }
            });
            (categorias.length > 0) ? this.listaCategorias = categorias : this.listaCategorias = [];
        }
    },
    computed: {
    },
    mounted() {
        // this.iniciar();
        this.misCategorias();
    },
    components: {
      FormularioNuevaCategoriaView
    }
}
</script>

<style>

</style>