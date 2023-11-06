export function generateSlug(string) {
	return string
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export function generateTagData(categories) {
	let categoryData = [];
	categories.forEach(category => {
		categoryData.push({
			title: category,
			slug: `${generateSlug(category)}`,
		});
	});
	return categoryData;
}
// textos.js
export const textos = {
	es: {
	  bienvenida: "Bienvenido a nuestro sitio web!",
	  encabezado: "Este es un encabezado en español",
	  // Otros textos en español...
	},
	en: {
	  bienvenida: "Welcome to our website!",
	  encabezado: "This is a header in English",
	  // Other texts in English...
	}
  };
  

  export const detectarIdioma = () => {
	const idiomaGuardado = window.localStorage.getItem('idiomaPreferido');
	if (idiomaGuardado) {
	  return idiomaGuardado;
	} else {
	  const idiomaNavegador = navigator.language || navigator.userLanguage;
	  return idiomaNavegador.startsWith('es') ? 'es' : 'en';
	}
  };
  
  export const cambiarIdioma = (idioma) => {
	window.localStorage.setItem('idiomaPreferido', idioma);
	// Recargar la página o actualizar el contenido dinámicamente
	window.location.reload();
  };