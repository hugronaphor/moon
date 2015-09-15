<?php if ($social_count) : ?>
  <div class="social-buttons">
    <ul class="footer-social">
      <?php if ($fb_site_url) : ?>
        <li rel="fb"><a title="Facebook" href="<?php print $fb_site_url; ?>" target="_blank">Facebook</a></li>
      <?php endif; ?>
      <?php if ($twitter_site_url) : ?>
        <li rel="twitter"><a title="Twitter" href="<?php print $twitter_site_url; ?>" target="_blank">Twitter</a></li>
      <?php endif; ?>
      <?php if ($instagram_site_url) : ?>
        <li class="last" rel="instagram"><a title="Instagram" href="<?php print $instagram_site_url; ?>" target="_blank">Instagram</a></li>
      <?php endif; ?>
    </ul>
  </div>
<?php endif; ?>