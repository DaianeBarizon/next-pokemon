export interface IPokemon {
  name?: string;
  url?: string;
}

export interface IPokeData {
  id: number;
  name: string;
  sprites: {
    back_default?: string;
    back_female?: null;
    back_shiny?: string;
    back_shiny_female?: null;
    front_default?: string;
    front_female?: null;
    front_shiny?: string;
    front_shiny_female?: null;
    other: {
      dream_world: {
        front_default?: string;
        front_female?: null;
     };
      'official-artwork': {
        front_default: string;
     }
    }
   };
   types: [
    {
       slot: number;
       type: {
         name: string;
         url: string;
      }
    },
  ]
}
