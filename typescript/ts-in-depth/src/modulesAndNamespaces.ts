////////////////////////////
// Modules And NameSpaces //
////////////////////////////

// In TS 1.5 "Internal modules" became namespaces, "external modules" became modules


////////////////
// Namespaces //

// Prevent global namespace pollution

namespace Membership {
  export function AddMember(name: string){

  };

  export namespace Cards {

    export function IssueCard(memberNumber: number){
      //issue new card
    };
  };

};


Membership.AddMember("Ant");
Membership.Cards.IssueCard(2422);

// Tripple-Slash References - used to expose namspaces in other files
/// <reference path="membership.ts" /> 

/////////////
// Modules //

interface Periodical {
  issueNumber: number;
};

class Magazine implements Periodical {

  constructor(public issueNumber: number){};
};

function GetMagazineByTitle(title: string): Magazine{
  return new Magazine(2222);
};

export { Periodical, Magazine, GetMagazineByTitle as GetMag }; 