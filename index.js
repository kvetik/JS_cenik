// Zruseni vyberu planu, ktery je zabarveny #1
const selectPlan = (planNumber) => {
  document.querySelector('#plan1').classList.remove('plan--selected');

// Pridani class plan--selected podle vybraneho planu
  const selectedPlanElm = document.querySelector(`#plan${planNumber}`);
  selectedPlanElm.classList.add('plan--selected');
}

// Volani jednotlivych planu - zadam cislo planu, ktery chci a ten se zabarvi
selectPlan(2);

