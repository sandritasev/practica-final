<template>
    <div>
        <form @submit.prevent="enviar()">

            <div class="form-outline mb-4">
                <label class="form-label" for="name" ref="nombre">Nombre</label>
                <input type="text" v-model="payload.name" id="name" class="form-control" required />
            </div>

            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioNuevaPersona',
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

            payload: {
                name: ""
            }
        }
    },
    methods: {
        enviar() {
            this.$emit('on-payload', this.payload);
            if (!this.mode_edit) {
                this.payload = {
                    name: ""
                };
                this.$refs.nombre.focus();
            }
        }
    },
    computed: {
    },
    mounted() {
        this.payload = this.inpayload;
    },
    components: {
    }
}
</script>

<style>

</style>