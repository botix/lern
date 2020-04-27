"use strict";
////////////////////////////
// Modules And NameSpaces //
////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// In TS 1.5 "Internal modules" became namespaces, "external modules" became modules
////////////////
// Namespaces //
// Prevent global namespace pollution
var Membership;
(function (Membership) {
    function AddMember(name) {
    }
    Membership.AddMember = AddMember;
    ;
    var Cards;
    (function (Cards) {
        function IssueCard(memberNumber) {
            //issue new card
        }
        Cards.IssueCard = IssueCard;
        ;
    })(Cards = Membership.Cards || (Membership.Cards = {}));
    ;
})(Membership || (Membership = {}));
;
Membership.AddMember("Ant");
Membership.Cards.IssueCard(2422);
;
var Magazine = /** @class */ (function () {
    function Magazine(issueNumber) {
        this.issueNumber = issueNumber;
    }
    ;
    return Magazine;
}());
exports.Magazine = Magazine;
;
function GetMagazineByTitle(title) {
    return new Magazine(2222);
}
exports.GetMag = GetMagazineByTitle;
;
