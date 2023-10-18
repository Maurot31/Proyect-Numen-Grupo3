import React 	from "react";
import Head		from "next/head";
import NavBar 	from "@/components/navBar/NavBar";
import Footer 	from "@/components/Footer";
//--------❀(Para mayor Legibilidad, configurar sangria por 4 espacios)❀--------

const UsuariosPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name	="description"	content	="Generated by create next app" />
				<meta name	="viewport"		content	="width=device-width, initial-scale=1" />
				<link rel	="icon"			href	="/favicon.ico"	/>
			</Head>
			<header> <NavBar /> </header>
			<main>
				<div>usuarios</div>

				<div className="usuarios-page">
//☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Login*
					<div className="login-section">
						<div className="section-content">
							<h1>Iniciar Sesión</h1>
							<form>
								<div className		="input-group">
									<label htmlFor	="username">
													Usuario:
									</label>
									<input	type	="text"
											id		="username"
											name	="username" />
								</div>
								<div className		="input-group">
									<label htmlFor	="password">
													Contraseña:
									</label>
									<input	type	="password"
											id		="password"
											name	="password" />
								</div>
								<div className		="input-group">
									<label htmlFor	="remember-username">
													Recordar mi usuario
									</label>
									<input 	type	="checkbox"
											id		="remember-username"
										className	="checkbox" />
								</div>
								<div className		="input-group">
									<label htmlFor	="remember-password">
													Recordar contraseña
									</label>
									<input 	type	="checkbox"
											id		="remember-password" />
								</div>
								<button		type	="submit">Iniciar Sesión</button>
							</form>
						</div>
					</div>
//☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Registro*
					<div className="registro-section">
						<div className="section-content">
							<h1>Registro</h1>
							<form>
								<div className		="input-group">
									<label htmlFor	="register-username">
													Usuario:
									</label>
									<input	type	="text"
											id		="register-username"
											name	="register-username" />
								</div>
								<div className		="input-group">
									<label htmlFor	="email">
													E-mail:
									</label>
									<input 	type	="email"
											id		="email"
											name	="email"/>
								</div>
								<div className		="input-group">
									<label htmlFor	="register-password">
													Contraseña:
									</label>
									<input 	type	="password"
											id		="register-password"
											name	="register-password" />
								</div>
								<div className		="input-group">
									<label htmlFor	="confirm-password">
													Confirmar Contraseña:
									</label>
									<input	type	="password" 
											id		="confirm-password"
											name	="confirm-password" />
								</div>
								<button		type	="submit">Registrarse</button>
							</form>
						</div>
					</div>
				</div>
//☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷☷Estilos*
				<style jsx>{`
					.usuarios-page
					{ display: 					grid;
						grid-template-columns: 	repeat(auto-fit, minmax(200px, 1fr));
						justify-items:			center;
						align-items: 			space-evenly;
						color: 					#ffffff;	
						margin: 				50px}

					.section-content
					{ text-align: 				center;
						margin-top: 			10px;}

					.login-section
					{ background-image: 		url(/img/fondo-sesion.png);
						height: 				300px;
						width: 					200px;
						border-radius: 			15px}

					.registro-section
					{ background-image: 		url(/img/fondo-registro.png);
						height: 				300px;
						width: 					200px;
						border-radius: 			15px}
					
					.input-group
					{	margin-bottom:			10px;
						display:				grid;
						place-content:			space-around}

					button
					{	background-color: 		#172556;
						color:					#ffffff;
						border:					none;
						border-radius:			.3rem;
						padding:				5px 10px;
						text-transform:			uppercase;
						box-shadow:				0px 2px 2px -1px black;
						transition:				0.3s;
						width:					95%;}

					button:hover
					{	box-shadow: 			0px 2px 2px 0.1px black;}
				`}</style>

				<Footer />
			</main>
		</>
	);
};

export default UsuariosPage;
