# PageLines DMS  File Structure #

~~~ .bash
/pagelines
|____admin
| |____actions.admin.php
| |____actions.options.php
| |____admin.head.php
| |____class.account.php
| |____class.debug.php
| |____class.extend.actions.php
| |____class.extend.integrations.php
| |____class.extend.php
| |____class.extend.plugins.php
| |____class.extend.sections.php
| |____class.extend.themes.php
| |____class.extend.ui.php
| |____class.options.engine.php
| |____class.options.metapanel.php
| |____class.options.panel.php
| |____class.options.ui.php
| |____class.profiles.php
| |____class.rss.php
| |____class.ui.color.php
| |____class.ui.layout.php
| |____class.ui.templates.php
| |____class.ui.typography.php
| |____class.updates.php
| |____class.welcome.php
| |____css
| | |____admin.css
| |____images
| | |____admin-metaoption-column.png
| | |____ajax-loader-f7f7f7.gif
| | |____ajax-loader.gif
| | |____bg-builder.png
| | |____bg-form-area.png
| | |____bg-indent-tall.png
| | |____bg-indent.png
| | |____bg-optionheader.jpg
| | |____bg-optionheader.png
| | |____bg_option_confirm.png
| | |____bg_optionheader.gif
| | |____bg_tabs.png
| | |____bottom-sheen-e1e1e1.png
| | |____bottom-sheen-eee.png
| | |____button-grad.png
| | |____comment.png
| | |____confirm-check.png
| | |____confirm-store.png
| | |____edit.png
| | |____extendleaf.png
| | |____favicon-pagelines.ico
| | |____favicon-pagelines.png
| | |____form-field-bg.gif
| | |____hl-dot.gif
| | |____hl-vert.png
| | |____icons
| | | |____404.png
| | | |____account.png
| | | |____admin.png
| | | |____application-sidebar-list.png
| | | |____archives.png
| | | |____arrow-down.png
| | | |____author.png
| | | |____balloon-blue.png
| | | |____balloon-smiley.png
| | | |____balloon-white.png
| | | |____balloon.png
| | | |____blog.png
| | | |____book-open.png
| | | |____book.png
| | | |____buddypress.png
| | | |____bullet-grey.png
| | | |____bullet_black.png
| | | |____category.png
| | | |____code.png
| | | |____color.png
| | | |____column.png
| | | |____compass.png
| | | |____dash-aff.png
| | | |____dash-dev.png
| | | |____dash-docs.png
| | | |____dash-drag-drop.png
| | | |____dash-forum.png
| | | |____dash-light-bulb.png
| | | |____dash-live.png
| | | |____dash-opts.png
| | | |____dash-plug.png
| | | |____dash-pros.png
| | | |____dash-setting.png
| | | |____dash-trans.png
| | | |____dash-video.png
| | | |____dashboard.png
| | | |____discussion.png
| | | |____docs.png
| | | |____download.png
| | | |____dragdrop.png
| | | |____edit-quotation.png
| | | |____equalizer.png
| | | |____error.png
| | | |____extend-inout.png
| | | |____extend-plugins.png
| | | |____extend-sections.png
| | | |____extend-themes.png
| | | |____extend-update.png
| | | |____favicon-pagelines.ico
| | | |____feed.png
| | | |____first-rule.png
| | | |____footer.png
| | | |____forum_options.png
| | | |____global.png
| | | |____hammer-screwdriver.png
| | | |____header.png
| | | |____home.png
| | | |____ileaf.png
| | | |____image.png
| | | |____images-stack.png
| | | |____import.png
| | | |____layout-design.png
| | | |____layout.png
| | | |____leaf.png
| | | |____light-bulb.png
| | | |____maps.png
| | | |____medal.png
| | | |____media.png
| | | |____mediawiki.png
| | | |____money.png
| | | |____newspaper.png
| | | |____newspapers.png
| | | |____notebook-arrow.png
| | | |____onetemplate.png
| | | |____page.png
| | | |____page2.png
| | | |____pagination.png
| | | |____pencil-small.png
| | | |____pencil.png
| | | |____pin.png
| | | |____plusbtn.png
| | | |____plusicon.png
| | | |____preview.png
| | | |____pro_options.png
| | | |____puzzle.png
| | | |____question-balloon.png
| | | |____quotation.png
| | | |____reports.png
| | | |____reset.png
| | | |____rocket-fly.png
| | | |____search.png
| | | |____sectionoptions.png
| | | |____sections.png
| | | |____settings.png
| | | |____sidebar.png
| | | |____soap.png
| | | |____sprite-admin-features.png
| | | |____star.png
| | | |____sticky.png
| | | |____store.png
| | | |____tag.png
| | | |____tick.png
| | | |____toolbox.png
| | | |____typography.png
| | | |____ui-breadcrumb.png
| | | |____user.png
| | | |____users.png
| | | |____vanilla.png
| | | |____welcome.png
| | | |____wrench.png
| | |____leaf.png
| | |____lightgraydown.png
| | |____lightgrayup.png
| | |____link-docs.jpg
| | |____link-video.jpg
| | |____login-pl.png
| | |____magnifier-medium.png
| | |____ohead-leaf.png
| | |____pagelines-icon.jpg
| | |____pagelines-leaf.png
| | |____pane.png
| | |____pl-login.png
| | |____section-hover.png
| | |____section-required.png
| | |____section-up.png
| | |____sections-none.png
| | |____sprite-blog-modes.png
| | |____sprite-design-modes.png
| | |____sprite-excerpt-modes.png
| | |____sprite-greyleaf-30.jpg
| | |____sprite-layout-modes.png
| | |____sprite-layouts.png
| | |____sprite-navigation.png
| | |____sprite-subtabs.png
| | |____sprite-template.png
| | |____sss-button.png
| | |____stripe.png
| | |____superlink-pagelines.png
| | |____superlink-sprite-black.png
| | |____superlink-sprite-blue.png
| | |____superlink-sprite-grey.png
| | |____superlink-sprite-red.png
| | |____tabsnav-item.png
| | |____thumb-default.png
| | |____white-grad.png
| |____init.admin.php
| |____js
| | |____codemirror
| | | |____codemirror.css
| | | |____codemirror.js
| | | |____css
| | | | |____css.js
| | | | |____index.html
| | | | |____test.js
| | | |____htmlmixed
| | | | |____htmlmixed.js
| | | | |____index.html
| | | |____javascript
| | | | |____index.html
| | | | |____javascript.js
| | | | |____typescript.html
| | | |____less
| | | | |____index.html
| | | | |____less.js
| | | |____util
| | | | |____closetag.js
| | | | |____colorize.js
| | | | |____continuecomment.js
| | | | |____continuelist.js
| | | | |____dialog.css
| | | | |____dialog.js
| | | | |____foldcode.js
| | | | |____formatting.js
| | | | |____javascript-hint.js
| | | | |____loadmode.js
| | | | |____match-highlighter.js
| | | | |____matchbrackets.js
| | | | |____multiplex.js
| | | | |____overlay.js
| | | | |____pig-hint.js
| | | | |____runmode-standalone.js
| | | | |____runmode.js
| | | | |____search.js
| | | | |____searchcursor.js
| | | | |____simple-hint.css
| | | | |____simple-hint.js
| | | | |____xml-hint.js
| | | |____xml
| | | | |____index.html
| | | | |____xml.js
| | |____colorbox
| | | |____colorbox.css
| | | |____images
| | | | |____border.png
| | | | |____controls.png
| | | | |____ie6
| | | | | |____borderBottomCenter.png
| | | | | |____borderBottomLeft.png
| | | | | |____borderBottomRight.png
| | | | | |____borderMiddleLeft.png
| | | | | |____borderMiddleRight.png
| | | | | |____borderTopCenter.png
| | | | | |____borderTopLeft.png
| | | | | |____borderTopRight.png
| | | | |____loading.gif
| | | | |____loading_background.png
| | | | |____overlay.png
| | | |____jquery.colorbox-min.js
| | |____colorpicker
| | | |____css
| | | | |____colorpicker.css
| | | | |____layout.css
| | | |____images
| | | | |____blank.gif
| | | | |____colorpicker_background.png
| | | | |____colorpicker_hex.png
| | | | |____colorpicker_hsb_b.png
| | | | |____colorpicker_hsb_h.png
| | | | |____colorpicker_hsb_s.png
| | | | |____colorpicker_indic.gif
| | | | |____colorpicker_overlay.png
| | | | |____colorpicker_rgb_b.png
| | | | |____colorpicker_rgb_g.png
| | | | |____colorpicker_rgb_r.png
| | | | |____colorpicker_select.gif
| | | | |____colorpicker_submit.png
| | | | |____custom_background.png
| | | | |____custom_hex.png
| | | | |____custom_hsb_b.png
| | | | |____custom_hsb_h.png
| | | | |____custom_hsb_s.png
| | | | |____custom_indic.gif
| | | | |____custom_rgb_b.png
| | | | |____custom_rgb_g.png
| | | | |____custom_rgb_r.png
| | | | |____custom_submit.png
| | | | |____select.png
| | | | |____select2.png
| | | | |____slider.png
| | | |____js
| | | | |____colorpicker.js
| | | | |____eye.js
| | | | |____layout.js
| | | | |____utils.js
| | |____jquery.ajaxupload.js
| | |____jquery.ckie.js
| | |____jquery.effects.js
| | |____jquery.layout.js
| | |____jquery.ui.core.js
| | |____jquery.ui.draggable.js
| | |____jquery.ui.droppable.js
| | |____jquery.ui.effect-highlight.js
| | |____jquery.ui.effect.js
| | |____jquery.ui.mouse.js
| | |____jquery.ui.resizable.js
| | |____jquery.ui.sortable.js
| | |____jquery.ui.widget.js
| | |____script.common.js
| | |____script.settings.js
| | |____type.cufon.js
| |____library.data.php
| |____library.extension.php
| |____library.help.php
| |____paths.admin.php
| |____t.dashboard.php
| |____t.extensions.php
| |____t.support.php
| |____t.welcome.php
|____changelog.txt
|____comments.php
|____css
| |____ie7.css
| |____multisite.css
|____editor
| |_____todo.text
| |____editor.actions.php
| |____editor.api.php
| |____editor.areas.php
| |____editor.color.php
| |____editor.draft.php
| |____editor.extensions.php
| |____editor.fileopts.php
| |____editor.functions.php
| |____editor.handler.php
| |____editor.importexport.php
| |____editor.init.php
| |____editor.installer.libs.php
| |____editor.installer.php
| |____editor.integrations.php
| |____editor.interface.php
| |____editor.layout.php
| |____editor.legacy.php
| |____editor.less.libs.php
| |____editor.less.php
| |____editor.page.php
| |____editor.regions.php
| |____editor.settings.config.php
| |____editor.settings.php
| |____editor.templates.php
| |____editor.typography.php
| |____editor.xlist.php
| |____images
| | |____avatar-default.png
| | |____default-favicon.png
| | |____default-login-image.png
| | |____default-touch-icon.png
| | |____drag-left-bar.png
| | |____drag-right-bar.png
| | |____drag-top-bar.png
| | |____icon-account.png
| | |____icon-builder.png
| | |____icon-layout.png
| | |____icon-pagelines.png
| | |____icon-picker.png
| | |____icon-picketr.png
| | |____icon-settings.png
| | |____pattern.png
| | |____splash-2column.png
| | |____splash-3column.png
| | |____splash-section-area.png
| | |____stripe.png
| | |____thumb-2column.png
| | |____thumb-3column.png
| | |____thumb-section-area.png
| | |____ui-icons-black.png
| | |____ui-icons-green.png
| | |____ui-icons-grey.png
| | |____ui-icons-lblue.png
| | |____ui-icons-white.png
| | |____ui-icons.png
| | |____ui-icons_a83300_256x240.png
| | |____ui-icons_cccccc_256x240.png
| | |____ui-icons_ffffff_256x240.png
| | |____whitey.png
| |____js
| | |____colorpicker
| | | |____colorpicker.css
| | | |____colorpicker.js
| | | |____transparent.png
| | | |____transparentGrad.png
| | |____fineuploader
| | | |____fineuploader-3.2.css
| | | |____jquery.fineuploader-3.2.js
| | | |____jquery.fineuploader-3.2.min.js
| | | |____loading.gif
| | | |____processing.gif
| | |____form.params.js
| | |____form.store.js
| | |____new.jquery.sortable.js
| | |____pl.ajax.js
| | |____pl.areas.js
| | |____pl.code.js
| | |____pl.editor.js
| | |____pl.extend.js
| | |____pl.layout.js
| | |____pl.library.js
| | |____pl.mapping.js
| | |____pl.optpanel.js
| | |____pl.sections.js
| | |____pl.settings.js
| | |____pl.templates.js
| | |____pl.themes.js
| | |____pl.toolbox.js
| | |____pl.xlist.js
| | |____utils.bootbox.js
| | |____utils.fileupload.js
| | |____utils.imagesloaded.js
| | |____utils.isotope.js
| | |____utils.less.js
| | |____utils.mousewheel.js
| | |____utils.sprintf.js
| |____mobile.menu.php
| |____panel.code.php
| |____panel.extend.php
| |____panel.live.php
| |____panel.sections.php
| |____panel.settings.php
| |____panel.themes.php
|____fonts
| |____fontawesome-webfont.eot
| |____fontawesome-webfont.svg
| |____fontawesome-webfont.ttf
| |____fontawesome-webfont.woff
|____footer.php
|____functions.php
|____header.php
|____images
| |____avatar_default.gif
| |____blink-sprite-grey.png
| |____designer.png
| |____dms.png
| |____favicon-adminbar.png
| |____logo-small.png
| |____logo.png
| |____logo@2x.png
| |____pagelines.png
| |____pagelines@2x.png
| |____post-next.png
| |____post-next@2x.png
| |____post-previous.png
| |____post-previous@2x.png
| |____pro-thumb-125x50.png
| |____pro-thumb.png
| |____screenshot-free.png
| |____search-btn.png
| |____search-btn@2x.png
| |____splash-missing.png
| |____thumb-missing.png
|____includes
| |____actions.site.php
| |____class.colors.php
| |____class.css.php
| |____class.integration.php
| |____class.layout.php
| |____class.objects.php
| |____class.posts.php
| |____class.register.php
| |____class.render.css.php
| |____class.sections.php
| |____class.shortcodes.php
| |____class.template.php
| |____class.themesupport.php
| |____class.types.php
| |____class.typography.php
| |____class.users.php
| |____config.options.php
| |____config.selectors.php
| |____config.widgets.php
| |____deprecated.php
| |____init.globals.php
| |____init.php
| |____init.singleton.php
| |____less.functions.php
| |____less.plugin.php
| |____library.extend.php
| |____library.functions.php
| |____library.I18n.php
| |____library.js.php
| |____library.layout.php
| |____library.layouts.php
| |____library.multisite.php
| |____library.options.php
| |____library.pagelines.php
| |____library.plugins.php
| |____library.templates.php
| |____library.theming.php
| |____library.upgrades.php
| |____library.wordpress.php
| |____version.php
| |____widgets.default.php
|____index.php
|____js
| |____less.min.js
| |____pl.common.js
| |____prettify
| | |____prettify.css
| | |____prettify.js
| |____script.blocks.js
| |____script.bootstrap.min.js
| |____script.easing.js
| |____script.fitvids.js
| |____script.resize.js
| |____script.supersize.js
| |____script.viewport.js
| |____script.waypoints.js
|____language
| |____pagelines.pot
| |____readme.txt
|____less
| |____accordion.less
| |____alerts.less
| |____blockquotes.less
| |____breadcrumbs.less
| |____buttons.less
| |____carousel.less
| |____close.less
| |____colors.less
| |____component-animations.less
| |____deprecated.less
| |____dropdowns.less
| |____forms.less
| |____grid.less
| |____icons.less
| |____labels-badges.less
| |____mixins.less
| |____modals.less
| |____navs.less
| |____pager.less
| |____pagination.less
| |____pl-core.less
| |____pl-editor.less
| |____pl-objects.less
| |____pl-plugins.less
| |____pl-structure.less
| |____pl-tables.less
| |____pl-wordpress.less
| |____progress-bars.less
| |____reset.less
| |____responsive.less
| |____tabs-pills.less
| |____thumbnails.less
| |____tooltip-popover.less
| |____typography.less
| |____utilities.less
| |____variables.less
| |____wells.less
|____page.alpha.php
|____page.beta.php
|____page.delta.php
|____page.epsilon.php
|____page.gamma.php
|____page.php
|____README.md
|____rtl.css
|____screenshot.png
|____searchform.php
|____sections
| |____columnizer
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____comments
| | |____icon-comment.png
| | |____icon-comment@2x.png
| | |____icon-pencil.png
| | |____icon-reply@2x.png
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____flipper
| | |____flipper.js
| | |____icon.png
| | |____min.caroufredsel.js
| | |____missing-thumb.jpg
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____hero
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____highlight
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____ibox
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____masthead
| | |____icon.png
| | |____jquery.fitvids.js
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____mediabox
| | |____default.png
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____navbar
| | |____icon.png
| | |____logo.png
| | |____navbar.js
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____noposts
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____pagination
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____pl_area
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____plcolumn
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____postauthor
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____postloop
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____postnav
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____postsinfo
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____quickslider
| | |____flexslider
| | | |____jquery.flexslider-min.js
| | | |____LICENSE.txt
| | | |____README.txt
| | |____icon.png
| | |____images
| | | |____bg_control_nav.png
| | | |____bg_direction_nav.png
| | | |____image1.jpg
| | | |____image2.jpg
| | | |____image3.jpg
| | | |____inacup_donut.jpg
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____rapidtabs
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____readme.txt
| |____revslider
| | |____assets
| | | |____arrow_large_left.png
| | | |____arrow_large_right.png
| | | |____arrow_left.png
| | | |____arrow_left2.png
| | | |____arrow_right.png
| | | |____arrow_right2.png
| | | |____arrowleft.png
| | | |____arrowright.png
| | | |____arrows.psd
| | | |____black50.png
| | | |____boxed_bgtile.png
| | | |____bullet.png
| | | |____bullet_boxed.png
| | | |____bullets.png
| | | |____bullets.psd
| | | |____bullets2.png
| | | |____coloredbg.png
| | | |____grain.png
| | | |____large_left.png
| | | |____large_right.png
| | | |____loader.gif
| | | |____loader2.gif
| | | |____navigdots.png
| | | |____navigdots_bgtile.png
| | | |____shadow1.png
| | | |____shadow2.png
| | | |____shadow3.png
| | | |____small_arrows.psd
| | | |____small_left.png
| | | |____small_left_boxed.png
| | | |____small_right.png
| | | |____small_right_boxed.png
| | | |____timer.png
| | | |____timerdot.png
| | | |____transparent.jpg
| | | |____white50.png
| | |____images
| | | |____bg1.jpg
| | | |____bg1.png
| | | |____bg2.jpg
| | | |____bg2.png
| | | |____bg3.jpg
| | | |____header-shadow.png
| | | |____leaf.png
| | |____jquery.revslider.min.js
| | |____jquery.revslider.plugins.min.js
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____sb_primary
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____thumb.png
| |____scrollspy
| | |____icon.png
| | |____scrollspy.js
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____secondnav
| | |____icon.png
| | |____section.php
| | |____style.less
| |____sharebar
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____simple_nav
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____starbars
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____starbar.js
| | |____style.less
| | |____thumb.png
| |____textbox
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____watermark
| | |____default-watermark.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
| |____widgetizer
| | |____icon.png
| | |____section.php
| | |____splash.png
| | |____style.less
| | |____thumb.png
|____sidebar.php
|____single.php
|____style.css
~~~