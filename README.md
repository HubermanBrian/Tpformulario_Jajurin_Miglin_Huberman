Para validar el nombre,  'if(nombre.value.length<3)' ya que cuenta los caracteres de lo que ingresa el usuario y valida que sea mayor a 3. En caso de no serlo, 'DisableButton()' se desabilita e boton para enviar el form
Para validar email, usamos regEx, que valida que el contenido del input tenga los datos requeridos. Por ejemplo, validar que tenga letras de la a-z, un @ y un .dominio 'emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;'
para validar contraseña tambien usamos regEx validando que tenga minimo 8 caracteres y contenga algun numero ' respuesta1= /[a-zA-Z]/.test(contraseña.value)  respuest2= /[0-9]/.test(contraseña.value);'
para confirmar contraseña, verificar con la anterior

En cuanto a las difcultades, fue con el email y contraseña, que quisimos hacer la logica manualmente, hasta que vimos que el regEx automatiza este proceso y nos ayuda.
Si tuviesemos mas tiempo, agregariamos mensajes emergentes en el html mostrando los errores con diferentes colores.
