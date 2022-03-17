# Tre variazioni sulla promise

Nelle righe 7-9 si definisce una funzione che restituisce una promise. La promise si risolve, senza risultati, dopo l'intervallo di tempo specificato dal parametro. QUesto si ottiene conn i metodo setTimeout, che esegue una funzione al termine di un intervallo di tempo definito. Nel nostro caso la funzione è la resolve, che viene chiamata senza parametri.

La prima variazione consiste nel dichiarare una funzione (resolve1) che verrà poi indicata come parametro del metodo "then".

La seconda variazione consiste nel non dichiarare esplicitamente la funzione resolve, ma di inserirla come funzione anonima in notazione arrow nel "then".

La terza variazione consiste nel definire in modo anonimo anche la promise stessa. 