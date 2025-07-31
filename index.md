---
layout: default
title: Home
---

<header class="site-header">
  <nav class="main-nav">
    <a href="#">FRAGMENTS</a>
    <a href="#">NOTES</a>
    <a href="#">KITS</a>
    <a href="#">ABOUT</a>
    <a href="#" class="rss">RSS</a>
  </nav>
</header>

<main class="layout">
  <section class="block fragments">
    <h2>FRAGMENTS</h2>
    <div class="image-set">
      <div class="image-box">VISUAL / IMAGE</div>
      <div class="image-box">SCAN / IMG</div>
    </div>
    <button onclick="showFootnote()">Hover/click FOOTNOTE</button>
    <div id="footnote" class="footnote hidden">Footnote text goes here...</div>
  </section>

  <section class="block editorial">
    <h2>EDITORIAL NOTES</h2>
    <p><em>“What did we think we were doing?…”</em></p>
    <a href="/assets/editorial-notes.pdf" class="button">[ DOWNLOAD ]</a>
    <button onclick="playAudio()">▶ AUDIO MARGINS</button>
    <audio id="audioMargins" src="/assets/audio/audio-margins.mp3"></audio>
  </section>

  <!-- Add other sections as needed -->
</main>

# Welcome to Assembly Otherwise

Explore the layered logic of publishing and workshops.

[Annotations Example](annotations.md)
