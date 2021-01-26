export interface IPokemon {
  name?: string;
  url?: string;
}

export interface IPokeCardProps {
  pokemon: IPokemon;
  background: string;
}

export interface IAbility {
  name?: string;
  url?: string;
}

export interface IAbilities {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

export interface IForm {
  name?: string;
  url?: string;
}

export interface IGameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  }
}

export interface IMoves {
  move: {
    name: string;
    url: string
 };
  version_group_details: [
   {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
     };
      version_group: {
       name: string;
       url: string;
     }
   },
 ]
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface ISprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: {
    dream_world: {
      front_default: string;
      front_female: null;
    };
    'official-artwork': {
      front_default: string;
    }
  };
  versions: {
    'generation-i': {
      'red-blue': {
        back_default: string;
        back_gray: string;
        front_default: string;
        front_gray: string;
      };
      yellow: {
        back_default: string;
        back_gray: string;
        front_default: string;
        front_gray: string;
      }
    };
    'generation-ii': {
      crystal: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      gold: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      silver: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      }
    };
    'generation-iii': {
      emerald: {
        front_default: string;
        front_shiny: string;
      };
      'firered-leafgreen': {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny:string;
      };
      'ruby-sapphire': {
        back_default: string;
        back_shiny: string;
        front_default:string;
        front_shiny: string;
      }
    };
    'generation-iv': {
      'diamond-pearl': {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      'heartgold-soulsilver': {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      platinum: {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      }
    };
    'generation-v': {
      'black-white': {
        animated: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      }
    };
    'generation-vi': {
      'omegaruby-alphasapphire': {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      'x-y': {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      }
    };
    'generation-vii': {
      icons: {
        front_default: string;
        front_female: null;
      };
      'ultra-sun-ultra-moon': {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      }
    };
    'generation-viii': {
      icons: {
        front_default: string;
        front_female: null;
      }
    }
  }
}

export interface IStats {
  base_stat: number;
  effort: number;
    stat: {
      name: string;
      url: string;
  }
}

export interface ITypes {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface IPokeData {
  abilities: [IAbilities];
  base_experience: number;
  forms: [IForm];
  game_indices: [IGameIndices];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [IMoves];
  name: string;
  order: number;
  species: ISpecies;
  sprites: ISprites;
  stats: [IStats];
  types: [ITypes];
  weight: number;
}
