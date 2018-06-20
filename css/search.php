<?php
/**
 * The template for displaying search results pages
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>
<?php $src = wp_get_attachment_image_src( get_post_thumbnail_id(45),'' );  ?>
<section class="inner_banner" style="background-image:url(<?php echo $src[0]; ?>);">
	<div class="container">
				<div class="caption-text">
					<h1 class="wow fadeInDown"><?php single_month_title(); ?></h1>
				</div>
			</div>
</section>

<section class="blog_section srch-page">
	<div class="container">
		<div class="row">
			<div class="col-md-9">
				<?php 
				  $i=0;
				  if ( have_posts() ) :
				?> 
				<div class="blog-grids">
					<?php 
					  while ( have_posts() ) : the_post();
					  $blgsrc = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID),'' ); 
					?>
					<div class="postWrapper">
						<div class="postTitle">
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						</div>
						<div class="blog_dtls">
							<div class="post_by">
								By <?php the_author(); ?> <span class="date1"><?php the_time('d M, Y');?></span>
							</div>
							<!--ul>
								<li><a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> like</a></li>
								<li><a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i> share</a></li>
								<li><a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> comments</a></li>
							</ul-->
						</div>
						<div class="blog-content">
							<figure style="background-image: url(<?php echo $blgsrc[0]; ?>);"></figure>
							<?php echo content(30);?>
							<a class="blog-read-more" href="<?php the_permalink(); ?>">Read More</a>
						</div>
					</div>
					<?php 
						endwhile;
						wp_reset_query();
					?>
				</div>
			
			<?php 
				else :
						get_template_part( 'template-parts/content', 'none' );
				endif;
			?>
			</div>
			<?php 
				$recentargs = array('post_type' => 'post','posts_per_page'=>3,'order' => 'DESC');
				$recent = new WP_Query( $recentargs );
				if ( $recent->have_posts() ) :
			?>
			<div class="col-md-3">
				<aside class="side-bar">
					<div class="srch_bar">
						<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
								<input type="text" placeholder="Search.." name="s" id="s" value="<?php echo get_search_query(); ?>" required>
								<button><i class="fa fa-search"></i></button> 
						</form>
					</div>
					<div class="recent-posts">
						<h2>Recent Posts</h2>
						<?php 
						  while ( $recent->have_posts() ) : $recent->the_post();
						  $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID),'' ); 
						?>
						<div class="recent-single-post">
							<div class="recent-singleimage" style="background-image: url(<?php echo $src[0]; ?>);"></div>
							<div class="recent-singlecontent">
								<a href="<?php the_permalink(); ?>" class="recent-singletitle"><?php the_title(); ?></a>
								<?php echo content(10);?>
							</div>
						</div>
						<?php 
							endwhile;
							wp_reset_query();
						?>
					</div>
					<div class="recent-posts">
						<h2>Archive</h2>
						<ul>
						<?php 
							$args = array(
								'type'            => 'monthly',
								'limit'           => '',
								'format'          => 'html', 
								'before'          => '',
								'after'           => '',
								'show_post_count' => false,
								'echo'            => 1,
								'order'           => 'DESC',
									'post_type'     => 'post'
							);
							$archive = wp_get_archives( $args ); 
						?>
						</ul>
					</div>
				</aside>
			</div>
			<?php endif; ?>
		</div>
	</div>
</section>

<?php get_footer(); ?>
