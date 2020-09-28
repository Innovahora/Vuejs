<template>
  <main class="main h-100 w-100">
		<div class="container h-100">
			<div class="row h-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Iniciar Sesión</h1>
							<!--p class="lead">
								Inicia sesión en tu cuenta para continuar
							</p-->
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<!--div class="text-center">
										<img alt="Vue logo" src="#" width="150">
									</div-->
									<form method="" action="" @submit.prevent='submitLogin'>
										<div class="form-group">
											<label>Usuario</label>
											<input v-model='login.username' class="form-control form-control-lg" type="text" name="username" placeholder="" />
                      <div class="text-danger" v-if='errors'>
                      <p v-for='er in getError("username")'>
                        {{er}}
                      </p>
                    </div>
										</div>
										<div class="form-group">
											<label>Contraseña</label>
											<input v-model='login.password' class="form-control form-control-lg" type="password" name="password" placeholder="" />
                      <div class="text-danger" v-if='errors'>
                      <p v-for='er in getError("password")'>
                        {{er}}
                      </p>
                    </div>
											<!--<small>
												<a href="pages-reset-password.html">Forgot password?</a>
											</small>-->
										</div>
										<!--<div>
											<div class="custom-control custom-checkbox align-items-center">
												<input type="checkbox" class="custom-control-input" value="remember-me" name="remember-me" checked>
												<label class="custom-control-label text-small">Remember me next time</label>
											</div>
										</div>-->
                    <div class="text-danger" v-if='errors'>
                      <p v-for='er in getError("non_field_errors")'>
                        {{er}}
                      </p>
                    </div>
										<div class="text-center mt-3">
                      <button class="btn btn-lg btn-primary">Ingresar</button>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</main>

</template>
<script>
import {setTokenData} from '@/utils/auth'
import errorDj from '@/mixins/errorDj'
export default {
  name: 'Login',
  props: {

  },
  mixins: [errorDj],
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitLogin () {
      const self = this;
      // if (self.login.username == 'admin' && (self.login.password == 'admin') {
      // this.axios.post('/login/api/v1/api-token-auth/', self.login)
      this.axios.post('/login/', self.login)
        .then((response) => { 
        let token = response.data.token,
          user = response.data.user,
          type_user = '',
          read_only = '';
        setTokenData(token, user);
        type_user = (user.type_user != '' && user.type_user != null) ? user.type_user : 'afp';
        if (type_user == 'afp') {
          read_only = (user.read_only != '' && user.read_only != null) ? (user.read_only ? 1 : 0) : 0
        }
        this.$user.set(Object.assign(user, { role: type_user+(type_user == 'afp' ? (read_only !== '' ? '-'+read_only : '') : '') }));
        self.$router.push({name: 'ActiveAffiliatesAccordingAfp'})
      })
      .catch((error) => {
        self.errors = error.response.data
      })
    }
  }
}
</script>

