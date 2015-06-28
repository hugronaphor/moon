<div class="footer-container">
  <?php if ($social_count) : ?>
    <div class="social-buttons">
      <ul class="footer-social">
        <?php if ($twitter_site_url) : ?>
          <li rel="twitter"><a title="Twitter" href="<?php print $twitter_site_url; ?>" target="_blank"></a></li>
        <?php endif; ?>
        <?php if ($vine_site_url) : ?>
          <li rel="vine"><a title="Vine" href="<?php print $vine_site_url; ?>" target="_blank"></a></li>
        <?php endif; ?>
        <?php if ($vimeo_site_url) : ?>
          <li rel="vimeo"><a title="Vimeo" href="<?php print $vimeo_site_url; ?>" target="_blank"></a></li>
        <?php endif; ?>
      </ul>
    </div>
  <?php endif; ?>
</div>
