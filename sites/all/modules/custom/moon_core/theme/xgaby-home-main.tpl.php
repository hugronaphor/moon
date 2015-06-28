<div class="main-home-block">
  <a href="/" class="main-logo">
    <h1><span>X</span>GABYMOOR</h1>
    <p><?php print t('feel your passion with me'); ?></p>
  </a>

  <?php if (!empty($main_menu)) : ?>
    <?php print $main_menu; ?>
  <?php endif; ?>

  <!--To do: write JS which will handle the background change-->
  <div id="homepage-pager" class="pager">
    <a href="#" class="slide-0 selected"><span></span></a>
    <a href="#" class="slide-1"><span></span></a>
    <a href="#" class="slide-2"><span></span></a>
  </div>
</div>