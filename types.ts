export interface IPokemon {
  name?: string;
  url?: string;
}

export interface IPokeCardProps {
  pokemon: IPokemon;
  background: string;
}

export interface IAbilities {
  ability: IPokemon;
  is_hidden: boolean;
  slot: number;
}

export interface IGameIndices {
  game_index: number;
  version: IPokemon;
}

export interface IMoves {
  move: IPokemon;
  version_group_details: [
   {
      level_learned_at: number;
      move_learn_method: IPokemon;
      version_group: IPokemon;
   },
 ]
}

export interface IGenerationI {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface IGeneration {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IGenerationIV {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface IGenerationVI {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
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
      'red-blue': IGenerationI;
      yellow: IGenerationI;
    };
    'generation-ii': {
      crystal: IGeneration;
      gold: IGeneration;
      silver: IGeneration;
    };
    'generation-iii': {
      emerald: {
        front_default: string;
        front_shiny: string;
      };
      'firered-leafgreen': IGeneration;
      'ruby-sapphire': IGeneration;
    };
    'generation-iv': {
      'diamond-pearl': IGenerationIV;
      'heartgold-soulsilver': IGenerationIV;
      platinum: IGenerationIV;
    };
    'generation-v': {
      'black-white': {
        animated: IGenerationIV;
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
      'omegaruby-alphasapphire': IGenerationVI;
      'x-y': IGenerationVI;
    };
    'generation-vii': {
      icons: {
        front_default: string;
        front_female: null;
      };
      'ultra-sun-ultra-moon': IGenerationVI;
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
    stat: IPokemon;
}

export interface ITypes {
  slot: number;
  type: IPokemon;
}

export interface IPokeData {
  abilities: [IAbilities] | null;
  base_experience: number;
  forms: [IPokemon];
  game_indices: [IGameIndices];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [IMoves];
  name: string;
  order: number;
  species: IPokemon;
  sprites: ISprites;
  stats: [IStats];
  types: [ITypes];
  weight: number;
}
