/* Promociones de la prenda que estás calculando. */
(function() {
  var dialog = document.getElementById('promosDialog');
  var contenido = document.getElementById('promosContenido');
  var link = document.getElementById('promosPackLink');
  var ultimoBoton;
  var overflowAnterior;
  var botones = document.querySelectorAll('.btn-ver-promos');

  Array.prototype.forEach.call(botones, function(boton) {
    boton.addEventListener('click', function() {
      ultimoBoton = boton;
      overflowAnterior = document.body.style.overflow;
      var pantalla = boton.closest('.talle-screen');
      var esRemera = pantalla.id === 'talleRemeraScreen' || pantalla.id === 'talleOversizeScreen';
      var titulo = esRemera ? 'Armá tu pack de remeras' : 'Armá tu pack de joggers y bermudas';
      var descripcion = esRemera
        ? 'Combiná remeras clásicas de manga corta, clásicas de manga larga y oversize.'
        : 'Combiná joggers cargo, joggers lisos y bermudas chino.';
      var beneficios = esRemera
        ? '<li><strong>3 remeras</strong><span><b>15% OFF</b> + envío gratis</span></li><li><strong>4 o más remeras</strong><span><b>20% OFF</b> + envío gratis</span></li>'
        : '<li><strong>Desde 3 prendas entre esas tres opciones</strong><span><b>10% OFF</b> + envío gratis</span></li>';
      document.getElementById('promosTitulo').textContent = titulo;
      contenido.innerHTML = '<div class="pack-promos"><div class="pack-shipping"><h4>Envío gratis desde 2 prendas</h4><p>Podés combinar remeras, joggers y bermudas como más te guste.</p></div><div class="pack-offer"><p>' + descripcion + '</p><ul>' + beneficios + '</ul></div></div>';
      link.href = esRemera ? 'https://www.tetelestai.com.ar/remera/' : 'https://www.tetelestai.com.ar/pantalon/';
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  });

  dialog.querySelector('.promos-close').addEventListener('click', function() { dialog.close(); });
  dialog.addEventListener('click', function(event) {
    if (event.target === dialog) {
      var rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', function() { document.body.style.overflow = overflowAnterior; if (ultimoBoton) ultimoBoton.focus(); });
})();
