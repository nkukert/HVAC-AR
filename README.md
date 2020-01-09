# HVAC-AR
Application for facilitating HVAC education using AR technology, written in Javascript

Bootstrap docs: https://getbootstrap.com/docs/3.4/
ar.js docs: https://github.com/jeromeetienne/AR.js/


OVERVIEW

This is a simple html/javascript web app that uses the bootstrap frontend framework. Navigation is provided by the index.html page - as of the writing of this document, functionality only exists for the Explore page, ar.html.

The frontend code is written in html and css, using the bootstrap framework. This framework allows for easy mobile layout optimization, without adding too many external dependencies that would slow down performance. Minor changes are handled by the css, which adds some custom control over sizes, colors, and layouts. 

Ar.html contains the augmented reality code, which consists of a set of script tags (see the docs above for more info on those) and references to the projection model. The projection model (found in the projections folder) is a gltf2.0 export of a model made in blender (presently it is the default donut found in most tutorials). To change the projection, simply export a new model and change the src value in the following tag:

<a-asset-item id="animated-asset" src="./projections/donut.gltf"></a-asset-item>

The a-entity tag contains controls for positioning (based on the center of the marker, see docs for details) and scaling. The a-entity tag identifies the model with the field gltf-model, referencing the id field of the a-asset-item tag above. To change the projection, simply change the reference of the src field of the a-asset-item tag to the new desired gltf2.0 model.

<a-entity
    animation-mixer
    gltf-model="#animated-asset"
    position=" 0 0 0"
    scale="4 4 4">
</a-entity>