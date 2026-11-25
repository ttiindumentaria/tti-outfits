/* Promociones de la prenda que estás calculando. */
(function() {
  var dialog = document.getElementById('promosDialog');
  var contenido = document.getElementById('promosContenido');
  var link = document.getElementById('promosPackLink');
  var botones = document.querySelectorAll('.btn-ver-promos');

  Array.prototype.forEach.call(botones, function(boton) {
    boton.addEventListener('click', function() {
      var pantalla = boton.closest('.talle-screen');
      var esRemera = pantalla.id === 'talleRemeraScreen' || pantalla.id === 'talleOversizeScreen';
      var titulo = esRemera ? 'Armá tu pack de remeras' : 'Combiná joggers y bermudas';
      var descripcion = esRemera
        ? 'Elegí entre clásicas de manga corta, manga larga y oversize.'
        : 'Combiná cargos, lisos y bermudas chino como quieras.';
      var beneficios = esRemera
        ? '<li><strong>3 remeras</strong><span><b>15% OFF</b> + envío gratis</span></li><li><strong>4 o más</strong><span><b>20% OFF</b> + envío gratis</span></li>'
        : '<li><strong>Desde 3 prendas</strong><span><b>10% OFF</b> + envío gratis</span></li>';
      document.getElementById('promosTitulo').textContent = titulo;
      contenido.innerHTML = '<div class="pack-promos"><div class="pack-shipping"><h4>Envío gratis desde 2 prendas</h4><p>Combiná las prendas como más te guste.</p></div><div class="pack-offer"><p>' + descripcion + '</p><ul>' + beneficios + '</ul></div></div>';
      link.href = boton.parentNode.querySelector('a.btn-premium-primary').href;
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
  dialog.addEventListener('close', function() { document.body.style.overflow = ''; });
})();
