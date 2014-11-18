blockAction
===========

Déclenche "le click" sur un bloc contenant au moins un lien.

**Dans cette documentation**

1. [Utilisation](#utilisation)
2. [Options](#options)

## Utilisation

```javascript
$('a.mycustomclass').blockAction ();
```

* La bibliothèque travaille uniquement sur le premier lien trouvé dans le bloc ;
* Si aucun lien n'est trouvé il ne se passe rien ;
* Si le lien contient un rel="external", la page de destination est ouverte dans un autre onglet, sinon elle est ouverte dans l'onglet courant.
    
## Options

Il n'existe pas d'option pour cette bibliothèque. Cependant, le premier paramètre correspond à une fonction de rappel.
Lorsqu'elle est définie, elle prend le pas et les traitements doivent être définis par cette dernière.

```javascript
$('a.mycustomclass').blockAction (function (bloc, url) {
    // Code ...
});
```
