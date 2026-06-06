# Multiservicios Cleaning S.G. — Web premium

Sitio web de una sola página, **premium y multilingüe (Español / English / Nederlands)** para una empresa de limpieza de villas vacacionales en la Costa del Sol.

## Archivos

| Archivo | Qué contiene |
|---------|--------------|
| `index.html` | Estructura y contenido de todas las secciones |
| `styles.css` | Diseño premium (paleta azul noche + dorado champán) |
| `script.js` | Cambio de idioma (ES/EN/NL), menú móvil, animaciones y formulario |

## Cómo verla en local

Con Python instalado, en esta carpeta:

```powershell
python -m http.server 5180
```

Luego abre <http://localhost:5180> en el navegador.

## ✅ Qué tienes que personalizar (placeholders)

Estos datos son **de muestra**. Sustitúyelos por los reales:

1. **WhatsApp** — `+34 611 598 556` ✅ (ya configurado, solo WhatsApp, sin línea fija)
   - En `index.html`: `wa.me/34611598556` (enlaces) y el número mostrado.
   - En `script.js`: dentro de las traducciones, `"contact.phone"`.
   - El número de WhatsApp va sin `+` ni espacios (ej. `wa.me/34611598556`).

2. **Email** — ✅ El email **no se muestra** en la web ni en el código (solo WhatsApp + formulario).
   - Las solicitudes del formulario llegan en **privado** al correo que registres en Web3Forms.

3. **Fotos / testimonios** — eliminados a propósito por **privacidad de los dueños**.
   El hero y el banner usan un fondo degradado premium (azul noche + dorado), sin fotos de villas.

4. **Logo** — ahora se muestra el texto "MSG" en una caja dorada. Si tienes un logo,
   puedes sustituir `.brand-mark` por una `<img>`.

5. **Zonas** — edita la lista en la sección `areas` de `index.html` si cubres otras localidades.

## 📨 El formulario de contacto (YA CONECTADO ✅)

El formulario está conectado a **[Web3Forms](https://web3forms.com)**: gratis, sin servidor
ni base de datos. Las solicitudes llegan en **privado** al correo que registres
(ese correo NO aparece en la web ni en el código fuente).

### Paso único para activarlo (1 minuto)

1. Entra en <https://web3forms.com>.
2. Escribe el correo donde quieres recibir las solicitudes para obtener tu **Access Key**
   (te la mandan a ese correo). No hace falta crear cuenta.
3. Abre `script.js`, arriba del todo, y pega la clave aquí:
   ```js
   const WEB3FORMS_ACCESS_KEY = "AQUÍ-TU-CLAVE";
   ```

> **Mientras no pegues la clave**, al enviar el formulario se abre **WhatsApp**
> con los datos ya escritos hacia +34 611 598 556 (fallback automático).

¡Listo! A partir de ahí cada solicitud llega a tu bandeja de entrada.

> **Mientras no pegues la clave**, el formulario funciona igualmente: abre el programa
> de correo del visitante con todos los datos ya rellenados (fallback automático).
> Incluye además un campo *honeypot* oculto para frenar el spam.

## 🌐 Publicar la web (gratis)

Al ser estática, puedes subirla a **Netlify**, **Vercel** o **Cloudflare Pages**
arrastrando esta carpeta. Te puedo guiar con el dominio (`multiservicioscleaningsg.com`).

## Idiomas

El idioma se detecta por el navegador y se recuerda en el dispositivo.
El visitante puede cambiarlo con el selector **ES · EN · NL** de la cabecera.
