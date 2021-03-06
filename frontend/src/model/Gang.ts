import {
  Attributes,
  Entity,
  attributes,
} from '@/model/Attributes';

import {
  EquipmentType,
  Weapon,
  Armor,
  Gear,
  Equipable,
} from '@/model/Equipment';

export enum GangStatus {
  isIdle = 'Idle',
  isMoving = 'Moving',
  isControlling = 'Controlling',
  isInfluencing = 'Influencing',
  isHealing = 'Healing',
  isRioting = 'Rioting',
  isBribing = 'Bribing',
  isEquipping = 'Equipping',
  isGiving = 'Giving',
  isHiding = 'Hiding',
  isResearching = 'Researching',
  isTerminated = 'Terminated',
}

export class Gang {
  public name: string;
  public force: number;
  public status: GangStatus;
  public attributes: Attributes;

  public equipment: Map<EquipmentType, Equipable> = new Map();

  public weapon?: Weapon;
  public armor?: Armor;
  public gear?: Gear;

  private maxForce = 10;

  public constructor(gang: Entity) {
    this.name = gang.name;
    this.force = gang.force; // TODO: Random starting force
    this.status = GangStatus.isIdle;
    this.attributes = gang;
  }

  public get statistics(): Attributes {
    return this.applyEquipmentBuffs({
      ...this.attributes,
      force: this.force,
    });
  }

  public applyEquipmentBuffs(
    statistics: Attributes,
  ): Attributes {
    this.equipment.forEach((
      equipable: Equipable,
      type: EquipmentType,
    ) => {
      statistics = {
        ...statistics,
        ...equipable,
      };
    });

    return statistics;
  }

  public takeDamage(damage: number): Gang {
    this.force -= damage;

    if (this.force <= 0) {
      this.status = GangStatus.isTerminated;
    }

    return this;
  }

  public heal(force: number): Gang {
    this.force += force;

    if (this.force < this.maxForce) {
      this.force = this.maxForce;
    }

    return this;
  }

  public control(): Gang {
    this.status = GangStatus.isControlling;
    return this;
  }

  public influence(): Gang {
    this.status = GangStatus.isInfluencing;
    return this;
  }

  public riot(): Gang {
    this.status = GangStatus.isRioting;
    return this;
  }

  public bribe(): Gang {
    this.status = GangStatus.isBribing;
    return this;
  }

  public research(): Gang {
    this.status = GangStatus.isResearching;
    return this;
  }

  public give(type: EquipmentType, toGang: Gang): Gang {
    this.status = GangStatus.isGiving;
    toGang.equip(this.unequip(type));
    return this;
  }

  public equip(equipment: Equipable): Gang {
    this.status = GangStatus.isEquipping;
    this.equipment.set(equipment.type, equipment);
    return this;
  }

  public unequip(type: EquipmentType): Equipable {
    const equipment = this.equipment.get(type) as Equipable;
    this.equipment.delete(type);
    return equipment;
  }
}

export const Debuggers = new Gang({
  name: 'Debuggers',
  ...attributes,
});
